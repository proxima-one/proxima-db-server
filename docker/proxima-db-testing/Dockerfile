FROM ubuntu:latest

COPY ./src /app/src
COPY ./test /app/test
COPY ./package.json /app/package.json

WORKDIR /app/
RUN apt-get update && apt-get install ca-certificates gnupg2 -y

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
RUN echo "deb https://dl.k6.io/deb stable main" | tee /etc/apt/sources.list.d/k6.list
RUN apt-get update
RUN apt-get install k6
RUN apt-get -y install nodejs npm

RUN npm install --global yarn
RUN yarn install

ENTRYPOINT ["k6", "run", "./test/loadTesting.js"]