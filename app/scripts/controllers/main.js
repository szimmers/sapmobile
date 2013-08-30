'use strict';

angular.module('sapmobileApp')
  .controller('MainCtrl', function ($scope, $location, Projects) {

        $scope.projects = Projects.get();

        $scope.openProjectDetail = function(project) {
            $location.path("/project/detail/" + project.uniqueId);
        }
  });
