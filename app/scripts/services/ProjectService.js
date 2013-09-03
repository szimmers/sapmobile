'use strict';

angular.module('sapmobileApp.ProjectService', ['ngResource'])
	.config(function($httpProvider) {
		$httpProvider.defaults.headers.common['Authorization'] = 'Basic YWR1bW1lcjp0ZXN0MTIz';

		/*
		 <add name="Access-Control-Allow-Origin" value="http://localhost:9000"/>
		 <add name="Access-Control-Allow-Headers" value="Origin, X-Requested-With, Content-Type,Authorization"/>
		 */
	})
	/**
	 * service for getting project list and looking up an individual project. project list must be
	 * loaded first.
	 */
	.service('Projects', function($http) {
		// get stores the projects for later retrieval by id
		var _projects = null;

		var _getById = function(projectId) {
			for (var i=0; i < _projects.length; i++) {
				var project = _projects[i];

				if (project == null)
					continue;

				if (project.uniqueId == projectId) {
					return project;
				}
			}
		}

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
				if (_projects == null) {
					this.get().then(function(response) {
						return _getById(projectId);
					});
				}
				else {
					return _getById(projectId);
				}
			}
		}
	})
	/**
	 * service for getting tickets related to a project
	 */
	.service('ProjectTickets', function($http, Endpoints) {
		return {
			get: function(project) {
				var endpoint = Endpoints.getById(project.endpointId);
				var endpointHost = endpoint.host;
				var url = 'http://localhost:85/' + endpointHost + '/services/project/' + project.uniqueId + '/';

				return $http.get(url).then(function(response) {
					return response.data;
				}, function(response) {
					console.log(response.status);
					alert(response.status);
				});
				/*
				Endpoints.getById(project.endpointId).then(function(endpoint) {
					var endpointHost = endpoint.host;
					var url = 'http://localhost:85/' + endpointHost + '/services/project/' + project.uniqueId + '/';

					return $http.get(url).then(function(response) {
						return response.data;
					}, function(response) {
						console.log(response.status);
						alert(response.status);
					});
				});
				*/
			}
		}
	});
