'use strict';

/**
 * @ngdoc overview
 * @name mcTaskApp
 * @description
 * # mcTaskApp
 *
 * Main module of the application.
 */
angular
  .module('mcTaskApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
