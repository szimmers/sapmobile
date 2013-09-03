'use strict';

angular.module('sapmobileApp', ['sapmobileApp.ProjectService', 'sapmobileApp.EndpointService'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/project/detail/:projectId', {
            templateUrl: 'views/projectDetail.html',
            controller: 'ProjectDetailCtrl',
			resolve: {
				ensureEndpointsLoaded: ['Endpoints', '$q', function(Endpoints, $q) {
					return Endpoints.resolve($q);
				}],
				project: ['Projects', '$route', function(Projects, $route){
					var projectId = $route.current.params.projectId;
					return Projects.getById(projectId);
				}],
				endpointForProject: ['Endpoints', 'project', function(Endpoints, project){
					return Endpoints.getById(project.uniqueId);
				}]
			}
        })
      .otherwise({
        redirectTo: '/'
      });
  });
