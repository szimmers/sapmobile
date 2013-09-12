'use strict';

describe('Service: CryptoService', function () {

	// load the service's module
	beforeEach(module('siteTicketPortal'));
	beforeEach(module('siteTicketPortal.CryptoService'));

	// instantiate service
	var service, username, password, authString;

	beforeEach(inject(function ($injector) {

		username = 'larry';
		password = 'larry123';
		authString = 'Basic bGFycnk6bGFycnkxMjM=';

		service = $injector.get('Crypto');
	}));

	it('should create a basic auth string', inject(function () {
		expect(service.getAuthString(username, password)).toBe(authString);
	}));

});
