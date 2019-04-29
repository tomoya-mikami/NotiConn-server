FROM alpine:latest as builder
COPY package.json .
COPY dist/ dist/
COPY gulpfile.js .
COPY webpack.config.js .
COPY tsconfig.json .
RUN apk --update add nodejs-npm
RUN apk add --no-cache nodejs
RUN npm install
RUN npm run gulp

FROM alpine:latest as runner
ADD package.json .
COPY --from=builder dist/bundle.min.js dist/bundle.min.js
RUN apk add --update nodejs nodejs-npm
CMD ["npm" "run" "start"]
