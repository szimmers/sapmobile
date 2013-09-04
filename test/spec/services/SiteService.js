'use strict';

describe('Service: SiteService', function () {

  // load the service's module
  beforeEach(module('sapmobileApp'));

  // instantiate service
  var SiteService;
  beforeEach(inject(function (_SiteService_) {
    SiteService = _SiteService_;
  }));

  it('should do something', function () {
    expect(!!SiteService).toBe(true);
  });

});
