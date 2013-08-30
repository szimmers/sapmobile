'use strict';

angular.module('sapmobileApp', ['sapmobileApp.services'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/project/detail/:projectName/:projectId', {
            templateUrl: 'views/projectDetail.html',
            controller: 'ProjectDetailCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
