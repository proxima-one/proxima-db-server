FROM node:lts-alpine

COPY ./src /app/src
COPY ./package.json /app/package.json

WORKDIR /app/

RUN yarn install

VOLUME /app/DB
VOLUME /app/config.yaml

ENTRYPOINT ["node", "./src/index.js"]