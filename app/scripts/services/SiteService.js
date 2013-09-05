'use strict';

angular.module('siteTicketPortal.SiteService', ['ngResource'])
	.service('Site', function ($http, $q, BASE_URL) {
		return {
			/**
			 * returns a list of sites available to the user
			 * @returns {*}
			 */
			get: function(brandKey, siteIdentifier) {
				var url = BASE_URL + '/services/sites/?brand=' + brandKey + '&site=' + siteIdentifier;

				return $http.get(url).then(function(response) {
					var site = response.data[0];
					return site;
				}, function(response) {
					console.log(response.status);
					alert(response.status);
				});
			}
		}
	});
