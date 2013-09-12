'use strict';

describe('Service: SiteService', function () {

	beforeEach(module('siteTicketPortal'));
	beforeEach(module('siteTicketPortal.SiteService'));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	var service, $httpBackend, scope, returnData, brandKey, siteIdentifier;

	beforeEach(inject(function ($injector, $rootScope, BASE_URL) {

		brandKey = 'BAR';
		siteIdentifier = '54321';

		// service returns an array
		returnData = [
			{"address1":"168 N. Pinest Ave", "address2":"", "altPhone":"", "brandKey":"BAR", "city":"MEMPHIS",
			"emailAddress":"", "primaryPhone":"909-345-9253", "siteIdentifier":"54321", "state":"TN", "zip":"38116 "}
		];

		var url = BASE_URL + '/services/sites/?brand=' + brandKey + '&site=' + siteIdentifier;

		scope = $rootScope.$new();

		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.expectGET(url).respond(200, returnData);

		service = $injector.get('Site');
	}));

	it('should return the site', inject(function () {

		var promise = service.get(brandKey, siteIdentifier).then(function(response) {
			scope.data = response;
		});

		$httpBackend.flush();
		scope.$apply();

		expect(scope.data).toEqual(returnData[0]);
	}));


});
