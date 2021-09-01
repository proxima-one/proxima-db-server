
FROM node:lts-alpine

COPY ./src /app/src
COPY ./package.json /app/package.json

WORKDIR /app/

RUN yarn install

VOLUME /app/DB
VOLUME /app/config.yaml


ENV NODE_ENV production
EXPOSE 50051
EXPOSE 80

ENTRYPOINT ["node", "./src/index.js"]
