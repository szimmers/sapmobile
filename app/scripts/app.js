'use strict';

angular.module('sapmobileApp', ['$strap.directives', 'sapmobileApp.ProjectService', 'sapmobileApp.SiteService'])
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
			.when('/site/detail/brand/:brandKey/site/:siteIdentifier', {
				templateUrl: 'views/siteDetail.html',
				controller: 'SiteDetailCtrl',
				resolve: {
					site: ['Site', '$route', function(Site, $route){
						var brandKey = $route.current.params.brandKey;
						var siteIdentifier = $route.current.params.siteIdentifier;
						return Site.get(brandKey, siteIdentifier);
					}]
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	});
