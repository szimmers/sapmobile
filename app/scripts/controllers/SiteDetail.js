'use strict';

angular.module('siteTicketPortal')
/**
 * When the site detail is requested, simply display the data in the provided site.
 */
	.controller('SiteDetailCtrl', function ($scope, site) {
		$scope.site = site;
	});
