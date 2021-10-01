FROM ubuntu:latest

COPY ./src /app/src
COPY ./test /app/test
COPY ./package.json /app/package.json

WORKDIR /app/
ENV DEBIAN_FRONTEND=noninteractive 
RUN apt-get update && apt-get install -y tzdata && apt-get install ca-certificates gnupg2 -y

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
RUN echo "deb https://dl.k6.io/deb stable main" | tee /etc/apt/sources.list.d/k6.list
RUN apt-get update
RUN apt-get install k6
RUN apt-get install -y curl \
 && curl -sL https://deb.nodesource.com/setup_14.x | bash \
 && apt-get -y install nodejs


RUN npm install --global yarn
RUN yarn install

ENTRYPOINT ["k6", "run", "./test/loadTesting.js"]