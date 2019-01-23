# Drupal-Gatsby

This is a very basic starter project with everything included to quickly mess around with a Drupal powered Gatsby site.

**This is *not* intended for use in production. At the very least, the included `settings.php` would need to be updated.**

## Requirements

- Docker, with docker-compose
- Composer
- (optional) local install of node, npm and gatsby

## Getting Started

1. In the `./drupal` directory, run `composer install` (You may need to add `--ignore-platform-reqs`, 
local composer is favored here because docker-for-mac's filesystem mount is excessively slow for composer).
2. Run `docker-compose up` from the project root directory.
3. Run `docker-compose exec php drush site-install --existing-config` to set up your Drupal site.
4. (Optional) Run `drush generate-content 50 --types="article"` to add 50 nodes of example content.

After all of this you should have a site ready to play around with.

Gatsby will be served from [localhost:8000](http://localhost:8000) and Drupal will be available at [localhost](http://localhost).

## Adding to Gatsby's package.json

Perform any npm tasks (`npm install`) inside of the gatsby container. For example, run `docker-compose exec gatsby npm install --save react` 
You will not need a local node_modules for this project, it will be stored entirely in Docker.

This container will also run `npm install` when it is built to grab initial node_module requirements.

# Building your Gatsby application

Similarly to adding new npm modules, you should run `docker-compose exec gatsby npm run build` to create your static assets.

They will be created in ./gatsby/public, and this folder will be synced from your container to your local filesystem.