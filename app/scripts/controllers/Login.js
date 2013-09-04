'use strict';

angular.module('sapmobileApp')
/**
 * When the login page is requested, handle the login action.
 */
	.controller('LoginCtrl', function ($scope, $location, Auth) {
		$scope.loginUser = function() {

			Auth.login($scope.username, $scope.password).then(function(result) {
				$location.path('#');
			}, function(response) {
				$location.path('/login');
			});
		}
	});
