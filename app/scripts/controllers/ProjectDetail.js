'use strict';

angular.module('sapmobileApp')
  .controller('ProjectDetailCtrl', function ($scope, $routeParams, Projects, ProjectTickets) {
        var projectId = $routeParams.projectId;
        $scope.project = Projects.getById(projectId);
        $scope.tickets = ProjectTickets.get(projectId);
  });
