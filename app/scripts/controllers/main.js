'use strict';

angular.module('sapmobileApp')
  .controller('MainCtrl', function ($scope, $location, Projects, Endpoints) {

        $scope.projects = Projects.get();

        $scope.openProjectDetail = function(project) {
			$scope.endpoints = Endpoints.get().then(function(){
				$location.path("/project/detail/" + project.uniqueId);
			});
        }
  });
