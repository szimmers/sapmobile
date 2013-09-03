'use strict';

angular.module('sapmobileApp')
/**
 * When the project detail is requested, use the provided project to load associated data,
 * including the project tickets.
 */
  .controller('ProjectDetailCtrl', function ($scope, $routeParams, project, ProjectTickets ) {
		$scope.project = project;
		$scope.tickets = ProjectTickets.get(project);
  });
