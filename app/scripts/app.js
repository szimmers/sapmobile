'use strict';

angular.module('sapmobileApp', ['sapmobileApp.ProjectService'])
	.config(function($httpProvider) {
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic YWR1bW1lcjp0ZXN0MTIz';
		delete $httpProvider.defaults.headers.common["X-Requested-With"];
	})
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
					project: ['Projects', '$route', function(Projects, $route){
						var projectId = $route.current.params.projectId;
						return Projects.getById(projectId);
					}]
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	});
