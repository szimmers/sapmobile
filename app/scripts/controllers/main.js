'use strict';

angular.module('sapmobileApp')
  .controller('MainCtrl', function ($scope, $location, Projects) {

        $scope.projects = Projects.get();

        /*
    $scope.projects = [
        {name: "Green Onion Slicer", uniqueId:8, type: "rollout"},
        {name: "Delphi COD", uniqueId:11, type: "rollout"},
        {name: "Delphi Service", uniqueId:15, type: "serviceContract"}
    ];
    */

        $scope.openProjectDetail = function(project) {
            $location.path("/project/detail/" + project.name + "/" + project.uniqueId);
            //$location.path("/project/detail/");
        }
  });
