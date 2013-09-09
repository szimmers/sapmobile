'use strict';

angular.module('siteTicketPortal')
/**
 * When the project detail is requested, use the provided project and tickets (on the scope) to render
 * the status of each site.
 */
  .controller('ProjectDetailCtrl', function ($scope, $location) {

		// when a site detail is requested, load the detail page
		$scope.openSiteDetail = function(brandKey, siteIdentifier) {
			$location.path("/site/detail/brand/" + brandKey + "/site/" + siteIdentifier);
		}
  });
