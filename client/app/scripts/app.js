'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutController'
      })
      .when('/signup', {
        templateUrl: 'scripts/signup/_signup.html',
        controller: 'signupController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
