# Webserver container
# Using Alpine Linux and Apache Web server with PHP Version 7.0

# Pull the image from Docker Hub
FROM php:7.2-apache
MAINTAINER Travis Raup (travis.raup@gmail.com)

COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

RUN apt-get update \
    && apt-get install -y vim git curl zip unzip build-essential gnupg \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN npm install -g yarn