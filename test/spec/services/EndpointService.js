'use strict';

describe('Service: EndpointService', function () {

  // load the service's module
  beforeEach(module('siteTicketPortal'));

  // instantiate service
  var EndpointService;
  beforeEach(inject(function (_EndpointService_) {
    EndpointService = _EndpointService_;
  }));

  it('should do something', function () {
    expect(!!EndpointService).toBe(true);
  });

});
