'use strict';

angular.module('sapmobileApp')
  .controller('ProjectDetailCtrl', function ($scope, $routeParams, Projects, Endpoints, ProjectTickets) {
		var projectId = $routeParams.projectId;
		var project = Projects.getById(projectId);
		var endpoint = Endpoints.getById(project.endpointId);
		var endpointHost = endpoint.host;

		$scope.project = project;
		$scope.tickets = ProjectTickets.get(projectId, endpointHost);
  });
