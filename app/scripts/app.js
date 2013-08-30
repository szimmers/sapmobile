'use strict';

angular.module('sapmobileApp', ['sapmobileApp.ProjectService'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/project/detail/:projectId', {
            templateUrl: 'views/projectDetail.html',
            controller: 'ProjectDetailCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
