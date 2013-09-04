'use strict';

angular.module('sapmobileApp')
/**
 * When the project detail is requested, use the provided project to load associated data,
 * including the project tickets.
 */
  .controller('ProjectDetailCtrl', function ($scope, $location, project, ProjectTickets ) {
		$scope.project = project;
		$scope.tickets = ProjectTickets.get(project);

		// when a site detail is requested, load the detail page
		$scope.openSiteDetail = function(brandKey, siteIdentifier) {
			$location.path("/site/detail/brand/" + brandKey + "/site/" + siteIdentifier);
		}
  });
