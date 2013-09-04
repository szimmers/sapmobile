'use strict';

angular.module('sapmobileApp.SiteService', ['ngResource'])
	.service('Site', function ($http, $q) {
		return {
			/**
			 * returns a list of sites available to the user
			 * @returns {*}
			 */
			get: function(brandKey, siteIdentifier) {
				var url = 'http://localhost:85/services/sites/?brand=' + brandKey + '&site=' + siteIdentifier;

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
