FROM node:9

MAINTAINER NATDANAI

LABEL "version"="1.0"

RUN mkdir -p /var/www/app

WORKDIR /var/www/app

EXPOSE 3000

EXPOSE 35729