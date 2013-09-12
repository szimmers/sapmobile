'use strict';

angular.module('siteTicketPortal')
/**
 * When the login page is requested, handle the login action.
 */
	.controller('LoginCtrl', function ($scope, $location, Auth) {
		$scope.loginUser = function() {

			return Auth.login($scope.username, $scope.password).then(function(result) {
				$location.path('#');
			}, function(response) {
				$scope.username = '';
				$scope.password = '';

				$location.path('/login');
			});
		}
	});
