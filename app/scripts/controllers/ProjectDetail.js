'use strict';

angular.module('sapmobileApp')
/**
 * When the project detail is requested, use the provided project id to load the project
 * object. We also need to get the associated endpoint in order to get the correct host
 * to load the site tickets.
 */
  .controller('ProjectDetailCtrl', function ($scope, $routeParams, Projects, Endpoints, ProjectTickets, project, endpointForProject) {
		var projectId = $routeParams.projectId;
		//var project = Projects.getById(projectId);
		var endpoint = Endpoints.getById(project.endpointId);
		var endpointHost = endpoint.host;

		$scope.project = project;
		$scope.tickets = ProjectTickets.get(projectId, endpointHost);
  });
