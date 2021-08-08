
FROM node:alpine

COPY ./ /app/

WORKDIR /app/

RUN npm install

VOLUME /app/DB

EXPOSE 50051

ENTRYPOINT ["node", "./src/index.js"]
