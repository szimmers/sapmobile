'use strict';

angular.module('sapmobileApp')
  .controller('ProjectDetailCtrl', function ($scope, $routeParams, ProjectTickets) {
        var project = {name: $routeParams.projectName, uniqueId: $routeParams.uniqueId};
        $scope.project = project;
        $scope.tickets = ProjectTickets.get(project.uniqueId);
  });
