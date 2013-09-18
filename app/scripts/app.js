'use strict';

angular.module('siteTicketPortal', ['$strap.directives', 'siteTicketPortal.AuthService', 'siteTicketPortal.ProjectService', 'siteTicketPortal.SiteService', 'siteTicketPortal.directives', 'googlechart'])
	// constants
	.constant('APP_VERSION', 'v0.2')
	//.constant('BASE_URL', 'http://localhost:85')							// local live server
	//.constant('BASE_URL', 'http://localhost:3000')						// node test server
	.constant('BASE_URL', 'http://site-ticket-server.herokuapp.com')		// node live server

	// configuration
	.config(function($httpProvider) {
		delete $httpProvider.defaults.headers.common["X-Requested-With"];
	})
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				resolve: {
					projects: ['Projects', function(Projects) {
						return Projects.get();
					}]
				}
			})
			.when('/project/:projectId', {
				templateUrl: 'views/project.html',
				controller: 'ProjectCtrl',
				resolve: {
					project: ['Projects', '$route', function(Projects, $route) {
						var projectId = $route.current.params.projectId;
						return Projects.getById(projectId);
					}],
					tickets: ['Projects', 'ProjectTickets', '$route', '$q', function(Projects, ProjectTickets, $route, $q) {
						var projectId = $route.current.params.projectId,
						deferred = $q.defer();

						Projects.getById(projectId).then(function(project) {
							ProjectTickets.get(project).then(function(tickets) {
								deferred.resolve(tickets);
							});
						});

						return deferred.promise;
					}]
				}
			})
			.when('/site/detail/brand/:brandKey/site/:siteIdentifier', {
				templateUrl: 'views/siteDetail.html',
				controller: 'SiteDetailCtrl',
				resolve: {
					site: ['Site', '$route', function(Site, $route) {
						var brandKey = $route.current.params.brandKey,
						siteIdentifier = $route.current.params.siteIdentifier;

						return Site.get(brandKey, siteIdentifier);
					}]
				}
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			})
			.when('/logout', {
				redirectTo: '/login',
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

	// route change interception for auth
	.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {

		$rootScope.$on("$routeChangeStart", function (event, next, current) {
			if (!Auth.isLoggedIn()) {
				$location.path('/login');
			}
		});

	}]);
