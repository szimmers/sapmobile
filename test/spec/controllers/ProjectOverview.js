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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
