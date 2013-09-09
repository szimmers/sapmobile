'use strict';

angular.module('siteTicketPortal')
/**
 * Provides way to show/hide parts of the nav bar, based on user logged in or not
 */
	.controller('NavCtrl', function ($scope) {
		$scope.loggedIn = false;

		$scope.$on('loginStatusChanged', function(event, loggedIn, loggedInUser) {
			$scope.loggedIn = loggedIn;
			$scope.user = loggedInUser;
		});
	});
