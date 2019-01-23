# Build the image once via CircleCI before running dev
# This adds uprofiler and xdebug on top of dev and adjusts opcache settings
FROM favish/php-7.2-fpm-drupal-8:1.0

WORKDIR /var/www/docroot

RUN pecl install \
	xdebug \
	&& docker-php-ext-enable \
	xdebug
