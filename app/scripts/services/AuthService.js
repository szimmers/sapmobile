'use strict';

/**
 * service for authentication
 */
angular.module('siteTicketPortal.AuthService', ['ngResource', 'siteTicketPortal.CryptoService'])
	/**
	 * configure http provider to return to login page if 401 is encountered
	 */
	.config( function ($httpProvider) {

			var interceptor = ['$location', '$q', function($location, $q) {
				function success(response) {
					return response;
				}

				function error(response) {

					if(response.status === 401) {
						$location.path('/login');
					}

					return $q.reject(response);
				}

				return function(promise) {
					return promise.then(success, error);
				};
			}];

			$httpProvider.responseInterceptors.push(interceptor);
	})
	/**
	 * service for authentication
	 */
	.factory('Auth', function ($http, $rootScope, BASE_URL, $q, Crypto) {
		var _currentUser;

		/**
		 * clears out traces of the previously logged-in user
		 */
		var clearUser = function() {
			_currentUser = undefined;
			$http.defaults.headers.common.Authorization = '';
		};

		/**
		 * let the world know when a user logs in or logs out
		 */
		var loginStatusChanged = function(loggedIn, loggedInUser) {
			$rootScope.$broadcast('loginStatusChanged', loggedIn, loggedInUser);
		};

		return {
			/**
			 * the currently logged in user
			 */
			getUser: function() {
				return _currentUser;
			},

			/**
			 * attempts to log in the indicated user. if successful, sets the auth string for the
			 * app and updates the user property.
			 * @param username
			 * @param password
			 * @returns {*}
			 */
			login: function(username, password) {
				$http.defaults.headers.common.Authorization = Crypto.getAuthString(username, password);

				var url = BASE_URL + '/services/user/' + username,
				deferred = $q.defer();

				$http.get(url).then(function(response) {
					_currentUser = response.data;
					loginStatusChanged(true, _currentUser);
					deferred.resolve(_currentUser);
				}, function(reason) {
					clearUser();
					loginStatusChanged(false, null);
					deferred.reject(reason);
				});

				return deferred.promise;
			},

			/**
			 * indicates if a user is logged in
			 * @returns {boolean}
			 */
			isLoggedIn: function() {
				return _currentUser !== undefined;
			},

			/**
			 * logs out the current user by resetting the user property and clearing the auth headers
			 */
			logout: function() {
				clearUser();
				loginStatusChanged(false, null);

				var deferred = $q.defer();
				deferred.resolve(_currentUser);
				return deferred.promise;
			}
		};
	});
