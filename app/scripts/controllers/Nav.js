'use strict';

angular.module('sapmobileApp')
/**
 * Provides way to show/hide parts of the nav bar, based on user logged in or not
 */
	.controller('NavCtrl', function ($scope, Auth) {
		$scope.loggedIn = false;

		$scope.$on('loginStatusChanged', function() {
			$scope.loggedIn = Auth.isLoggedIn();
		});
	});
