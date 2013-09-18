'use strict';

/**
 * service for getting endpoint data
 */
angular.module('siteTicketPortal.EndpointService', ['ngResource'])
	/**
	 * service for getting endpoint list and looking up an individual endpoint.
	 */
	.service('Endpoints', function ($http, $q, BASE_URL) {
		// get stores the endpoints for later retrieval by id
		var _endpoints = null;

		/**
		 * given an id, finds the matching endpoint from the previously loaded endpoints.
		 * @param endpointId
		 * @returns {*}
		 * @private
		 */
		var _getById = function(endpointId) {
			var i, len, endpoint;

			for (i=0, len = _endpoints.length; i < len; i++) {
				endpoint = _endpoints[i];

				if ((endpoint !== null) && (endpoint.uniqueId == endpointId)) {
					return endpoint;
				}
			}
		};

		return {
			/**
			 * returns a list of endpoints
			 * @returns {*}
			 */
			get: function() {
				var url = BASE_URL + '/services/endpoint/';

				return $http.get(url).then(function(response) {
					_endpoints = response.data;
					return _endpoints;
				});
			},
			/**
			 * given an id, returns the matching endpoint
			 * @param endpointId
			 * @returns {*}
			 */
			getById: function(endpointId) {
				var deferred = $q.defer(),
					endpoint;

				if (_endpoints === null) {
					this.get().then(function() {
						endpoint = _getById(endpointId);
						deferred.resolve(endpoint);
					});
				}
				else {
					endpoint = _getById(endpointId);
					deferred.resolve(endpoint);
				}

				return deferred.promise;
			}
		};
	});
