'use strict';

angular.module('sapmobileApp')
/**
 * When the site detail is requested, simply display the data in the provided site.
 */
	.controller('SiteDetailCtrl', function ($scope, site) {
		$scope.site = site;

		$scope.goBack = function() {
			window.history.back();
		}
	});
