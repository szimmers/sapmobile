'use strict';

var services = angular.module('sapmobileApp.services', ['ngResource']).
	config(function($httpProvider) {
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic YWR1bW1lcjp0ZXN0MTIz';

		/*
		 <add name="Access-Control-Allow-Origin" value="http://localhost:9000"/>
		 <add name="Access-Control-Allow-Headers" value="Origin, X-Requested-With, Content-Type,Authorization"/>
		 */
	}
);

 /*
services.service('Projects', function($http) {
	return {
		get: function() {
			var url = 'http://localhost:85/services/project/';

			return $http.get(url).then(function(response) {
				return response.data;
			}, function(response) {
				console.log(response.status);
				alert(response.status);
			});
		}
	}
});
*/

/*
services.service('ProjectTickets', function($http, $route) {
	return {
		get: function() {
			var projectId = $route.current.params.projectId;
			var endpoint = $route.current.params.endpoint;

			var url = 'http://localhost:85/' + endpoint + '/services/project/' + projectId + '/';

			return $http.get(url).then(function(response) {
				return response.data;
			}, function(response) {
				console.log(response.status);
				alert(response.status);
			});
		}
	}
});

services.service('Endpoints', function($http) {
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
	*/