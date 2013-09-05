'use strict';

angular.module('siteTicketPortal')
	.controller('MainCtrl', function ($scope, $location, Projects) {

		$scope.projects = Projects.get();

		// when a project detail is requested, load the detail page using the project id
		$scope.openProjectDetail = function(project) {
			$location.path("/project/detail/" + project.uniqueId);
		}

		// hide new projects, since we can't access their tickets
		$scope.hideNewStatus = function (project) {
			if (project.status == 1)
				return false;

			return true;
		};
	});
