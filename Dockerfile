FROM node:7.4.0-alpine
MAINTAINER Valentin Krasontovitsch v.krasontov@gmail.com

RUN mkdir /deploy
COPY . /deploy
WORKDIR /deploy
RUN npm install
EXPOSE 3000
CMD ['npm', 'start']
