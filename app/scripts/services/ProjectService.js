'use strict';

angular.module('siteTicketPortal.ProjectService', ['ngResource', 'siteTicketPortal.EndpointService'])
	/**
	 * service for getting project list and looking up an individual project.
	 */
	.service('Projects', function($http, $q) {
		// get stores the projects for later retrieval by id
		var _projects = null;

		/**
		 * given an id, finds the matching project from the previously loaded projects.
		 * @param projectId
		 * @returns {*}
		 * @private
		 */
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
			/**
			 * returns a list of projects available to the user
			 * @returns {*}
			 */
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
			/**
			 * given an id, returns the matching project
			 * @param projectId
			 * @returns {*}
			 */
			getById: function(projectId) {
				var deferred = $q.defer();

				if (_projects == null) {
					this.get().then(function(response) {
						var project = _getById(projectId);
						deferred.resolve(project);
					});
				}
				else {
					var project = _getById(projectId);
					deferred.resolve(project);
				}

				return deferred.promise;
			}
		}
	})
	/**
	 * service for getting tickets related to a project
	 */
	.service('ProjectTickets', function($http, Endpoints) {
		return {
			/**
			 * given a project, returns the list of associated tickets
			 * @param project
			 * @returns {*}
			 */
			get: function(project) {
				return Endpoints.getById(project.endpointId).then(function(endpoint) {
					var endpointHost = 'endpoint_undefined';

					if (endpoint != null) {
						endpointHost = endpoint.host;
					}

					var url = 'http://localhost:85/' + endpointHost + '/services/project/' + project.uniqueId + '/';

					return $http.get(url).then(function(response) {
						return response.data;
					}, function(response) {
						console.log(response.status);
						alert(response.status);
					});
				});
			}
		}
	});
