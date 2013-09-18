'use strict';

angular.module('siteTicketPortal')
	.controller('MainCtrl', function ($scope, projects, statusConstants) {

		$scope.projects = projects;

		// hide new projects, since we can't access their tickets
		$scope.hideNewStatus = function (project) {
			return (project.status !== statusConstants.New);
		};
	});
