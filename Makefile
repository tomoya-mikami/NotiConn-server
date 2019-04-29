PROJECT_ID = noticonn
TAG_NAME = $(shell git rev-parse --short HEAD)

.PHONY: run
run: gulp compose/up

.PHONY: gulp
	npm run gulp

.PHONY: compose/up
	docker-compose up -d

.PHONY: deploy
deploy: deploy/gcr deploy/gke

.PHONY: deploy/gcr
deploy/gcr:
	docker build --no-cache=true -t gcr.io/$(PROJECT_ID)/server-images:$(TAG_NAME) .
	docker push gcr.io/$(PROJECT_ID)/server-images:$(TAG_NAME)

.PHONY: deploy/gke
deploy/gke:
	kubectl apply -f gke/noticonn-deployment.yml
	kubectl apply -f gke/noticonn-service.yml
