'use strict';

angular.module('sapmobileApp.ProjectService', ['ngResource'])
	.config(function($httpProvider) {
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic YWR1bW1lcjp0ZXN0MTIz';

		/*
		 <add name="Access-Control-Allow-Origin" value="http://localhost:9000"/>
		 <add name="Access-Control-Allow-Headers" value="Origin, X-Requested-With, Content-Type,Authorization"/>
		 */
	})
	.service('Projects', function($http) {
		// get stores the projects for later retrieval by id
		var _projects = null;

		return {
			get: function() {
				var url = 'http://localhost:85/services/project/';

				return $http.get(url).then(function(response) {
					_projects = response.data;
					return _projects;
				}, function(response) {
					console.log(response.status);
					alert(response.status);
				});
			},
			getById: function(projectId) {
				// lookup
				for (var i=0; i < _projects.length; i++) {
					var project = _projects[i];

					if (project == null)
						continue;

					if (project.uniqueId == projectId) {
						return project;
					}
				}

				return null;
			}
		}
	})
	.service('ProjectTickets', function($http, $route) {
		return {
			get: function() {
				var projectId = $route.current.params.projectId;
				//var endpoint = $route.current.params.endpoint;
				var endpoint = 'instances\/AcmeProcess';

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
