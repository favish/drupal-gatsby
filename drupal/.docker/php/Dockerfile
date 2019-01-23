FROM favish/php-7.2-fpm-drupal-8:1.0

# Install git for local composer usage
RUN \
  DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y \
    git

# Install composer for easy package management
RUN php -r "readfile('https://getcomposer.org/installer');" | php && mv composer.phar /usr/local/bin/composer

# Add composer vendor binaries to path, primarily for Drush
ENV PATH="/var/www/vendor/bin:${PATH}"