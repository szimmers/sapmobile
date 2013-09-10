'use strict';

describe('Controller: ProjectoverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('sapmobileApp'));

  var ProjectoverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectoverviewCtrl = $controller('ProjectoverviewCtrl', {
      $scope: scope
    });
  }));

});
