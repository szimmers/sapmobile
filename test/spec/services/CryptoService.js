'use strict';

describe('Service: CryptoService', function () {

  // load the service's module
  beforeEach(module('sapmobileApp'));

  // instantiate service
  var CryptoService;
  beforeEach(inject(function (_CryptoService_) {
    CryptoService = _CryptoService_;
  }));

  it('should do something', function () {
    expect(!!CryptoService).toBe(true);
  });

});
