'use strict';

/**
 * service for getting endpoint data
 */
angular.module('sapmobileApp.EndpointService', ['ngResource'])
	.config(function($httpProvider) {
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic YWR1bW1lcjp0ZXN0MTIz';

		/*
		 <add name="Access-Control-Allow-Origin" value="http://localhost:9000"/>
		 <add name="Access-Control-Allow-Headers" value="Origin, X-Requested-With, Content-Type,Authorization"/>
		 */
	})
	/**
	 * service for getting endpoint list and looking up an individual endpoint. endpoint list must be
	 * loaded first.
	 */
	.service('Endpoints', function ($http) {
		// get stores the endpoints for later retrieval by id
		var _endpoints = null;

		var _getById = function(endpointId) {
			for (var i=0; i < _endpoints.length; i++) {
				var endpoint = _endpoints[i];

				if (endpoint == null)
					continue;

				if (endpoint.uniqueId == endpointId) {
					return endpoint;
				}
			}
		}

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
				if (_endpoints == null) {
					this.get().then(function(response) {
						return _getById(endpointId);
					});
				}
				else {
					return _getById(endpointId);
				}
			}/*,
			resolve: function($q) {
				var deferred = $q.defer();

				if (_endpoints == null) {
					this.get().then(function(response) {
						deferred.resolve(response);
					});
				}
				else {
					deferred.resolve(_endpoints);
				}

				return deferred.promise;
			}
			*/
		}
	});
