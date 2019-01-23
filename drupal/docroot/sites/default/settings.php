<?php

// @codingStandardsIgnoreFile

$databases['default']['default'] = array (
  'database' => getenv("MYSQL_DB"),
  'username' => getenv("MYSQL_USER"),
  'password' => getenv("MYSQL_PASS"),
  'prefix' => '',
  'host' => getenv("MYSQL_HOST"),
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);

$settings['hash_salt'] = 'FJDgtRYkoknVzwuWSunOa4Ne-saWnDKvv0w9ew00fErSt_ay3nWArDr1Sy1webhaX1Ld8qfeeg';

$config_directories['sync'] = '../config/sync';

$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

$settings['container_yamls'][] = $app_root . '/' . $site_path . '/development.services.yml';

$config['system.logging']['error_level'] = 'verbose';

//$settings['cache']['bins']['render'] = 'cache.backend.null';
//$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

$settings['skip_permissions_hardening'] = TRUE;
$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];
