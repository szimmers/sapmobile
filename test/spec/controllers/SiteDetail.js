'use strict';

describe('Controller: SitedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('siteTicketPortal'));

  var SitedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SitedetailCtrl = $controller('SitedetailCtrl', {
      $scope: scope
    });
  }));

});
