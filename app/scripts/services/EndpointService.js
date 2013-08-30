'use strict';

angular.module('sapmobileApp.EndpointService', ['ngResource'])
	.config(function($httpProvider) {
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic YWR1bW1lcjp0ZXN0MTIz';

		/*
		 <add name="Access-Control-Allow-Origin" value="http://localhost:9000"/>
		 <add name="Access-Control-Allow-Headers" value="Origin, X-Requested-With, Content-Type,Authorization"/>
		 */
	})
	.service('Endpoints', function /*Projects*/($http) {
		return {
			get: function() {
				var url = 'http://localhost:85/services/endpoint/';

				return $http.get(url).then(function(response) {
					return response.data;
				}, function(response) {
					console.log(response.status);
					alert(response.status);
				});
			}
		}
	});
