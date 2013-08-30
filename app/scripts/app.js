'use strict';

angular.module('sapmobileApp', ['sapmobileApp.ProjectService', 'sapmobileApp.EndpointService'])
  .config(function ($routeProvider/*, Endpoints*/) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/project/detail/:projectId', {
            templateUrl: 'views/projectDetail.html',
            controller: 'ProjectDetailCtrl',
			resolve: {
				endpointsRequired: ['Endpoints', '$q', function(Endpoints, $q) {
					return Endpoints.resolve($q);
				}]
			}
        })
      .otherwise({
        redirectTo: '/'
      });
  });
