FROM node:10.15-alpine as builder
RUN mkdir ./dist
COPY package.json ./
COPY src/ src/
COPY gulpfile.js ./
COPY webpack.config.js ./
COPY tsconfig.json ./
RUN npm install && \
    npm run gulp

FROM alpine:3.9
ADD package.json .
COPY --from=builder dist/bundle.min.js dist/bundle.min.js
RUN apk update && \
    apk add nodejs nodejs-npm
CMD [ "npm", "start" ]
