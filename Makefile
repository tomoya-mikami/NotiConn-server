PROJECT_ID = noticonn
TAG_NAME = $(shell git rev-parse --short HEAD)

.PHONY: all
all: gulp compose/down compose/up

.PHONY: restart
restart: gulp compose/restart

.PHONY: gulp
gulp:
	npm run gulp

.PHONY: compose/down
compose/down:
	docker-compose down --rmi all

.PHONY: compose/up
compose/up:
	docker-compose up -d

.PHONY: compose/restart
compose/restart:
	docker-compose restart

.PHONY: compose/logs
compose/logs:
	docker-compose logs -f

.PHONY: deploy
deploy:
	deploy/gcr deploy/gke

.PHONY: deploy/gcr
deploy/gcr:
	docker build --no-cache=true -t gcr.io/$(PROJECT_ID)/server-images:$(TAG_NAME) .
	docker push gcr.io/$(PROJECT_ID)/server-images:$(TAG_NAME)

.PHONY: deploy/gke
deploy/gke:
	kubectl apply -f gke/noticonn-deployment.yml
	kubectl apply -f gke/noticonn-service.yml
