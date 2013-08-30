'use strict';

angular.module('sapmobileApp.EndpointService', ['ngResource'])
	.config(function($httpProvider) {
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic YWR1bW1lcjp0ZXN0MTIz';

		/*
		 <add name="Access-Control-Allow-Origin" value="http://localhost:9000"/>
		 <add name="Access-Control-Allow-Headers" value="Origin, X-Requested-With, Content-Type,Authorization"/>
		 */
	})
	.service('Endpoints', function ($http) {
		// get stores the endpoints for later retrieval by id
		var _endpoints = null;

		return {
			get: function() {
				var url = 'http://localhost:85/services/endpoint/';

				return $http.get(url).then(function(response) {
					_endpoints = response.data;
					return _endpoints;
				}, function(response) {
					console.log(response.status);
					alert(response.status);
				});
			},
			getById: function(endpointId) {
				// lookup
				for (var i=0; i < _endpoints.length; i++) {
					var endpoint = _endpoints[i];

					if (endpoint == null)
						continue;

					if (endpoint.uniqueId == endpointId) {
						return endpoint;
					}
				}

				return null;
			}
		}
	});
