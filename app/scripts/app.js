'use strict';

angular.module('sapmobileApp', ['$strap.directives', 'sapmobileApp.AuthService', 'sapmobileApp.ProjectService', 'sapmobileApp.SiteService'])
	.config(function($httpProvider) {
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
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			})
			.when('/logout', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl',
				resolve: {
					logout: ['Auth', function(Auth) {
						return Auth.logout();
					}]
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {

		$rootScope.$on("$routeChangeStart", function (event, next, current) {
			if(!Auth.isLoggedIn()) {
				$location.path('/login');
			}
		});

	}]);
