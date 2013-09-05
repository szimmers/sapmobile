'use strict';

/**
 * service for authentication
 */
angular.module('siteTicketPortal.AuthService', ['ngResource'])
	/**
	 * configure http provider to return to login page if 401 is encountered
	 */
	.config( function ($routeProvider, $locationProvider, $httpProvider) {

			var interceptor = ['$location', '$q', function($location, $q) {
				function success(response) {
					return response;
				}

				function error(response) {

					if(response.status === 401) {
						$location.path('/login');
						return $q.reject(response);
					}
					else {
						return $q.reject(response);
					}
				}

				return function(promise) {
					return promise.then(success, error);
				}
			}];

			$httpProvider.responseInterceptors.push(interceptor);
	})
	/**
	 * service for authentication
	 */
	.factory('Auth', function ($http, $rootScope) {
		var _currentUser;

		/**
		 * creates an authentication string based on the provided username and password
		 * @param username
		 * @param password
		 * @returns {string}
		 */
		var authString = function(username, password) {
			var mash = username + ":" + password;
			var wordArray = CryptoJS.enc.Utf8.parse(mash);
			var encodedStr = CryptoJS.enc.Base64.stringify(wordArray);
			var authString = "Basic " + encodedStr;

			return authString;
		};

		/**
		 * clears out traces of the previously logged-in user
		 */
		var clearUser = function() {
			_currentUser = undefined;
			$http.defaults.headers.common['Authorization'] = '';
		};

		/**
		 * let the world know when a user logs in or logs out
		 */
		var loginStatusChanged = function() {
			$rootScope.$broadcast('loginStatusChanged');
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
				$http.defaults.headers.common['Authorization'] = authString(username, password);

				var url = "http://localhost:85/services/user/" + username;

				return $http.get(url).then(function(response) {
					_currentUser = response.data;
					loginStatusChanged();
				}, function(response) {
					clearUser();
					loginStatusChanged();
					console.log(response.status);
					alert(response.status);
				});
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
				loginStatusChanged();
			}
		};
	});
