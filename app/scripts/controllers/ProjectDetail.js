'use strict';

angular.module('sapmobileApp')
/**
 * When the project detail is requested, use the provided project id to load the project
 * object. We also need to get the associated endpoint in order to get the correct host
 * to load the site tickets.
 */
  .controller('ProjectDetailCtrl', function ($scope, $routeParams, project, ProjectTickets ) {
		$scope.project = project;
		$scope.tickets = ProjectTickets.get(project);
  });
