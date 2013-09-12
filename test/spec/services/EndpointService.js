'use strict';

describe('Service: EndpointService', function () {

	beforeEach(module('siteTicketPortal'));
	beforeEach(module('siteTicketPortal.EndpointService'));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	var service, $httpBackend, scope, returnData;

	beforeEach(inject(function ($injector, $rootScope, BASE_URL) {

		returnData = [
			{"defaultNamespace":"ticket.client.foo", "host":"instances\/Foo", "name":"Foo Process", "type":"rollout", "uniqueId":1},
			{"defaultNamespace":"ticket.client.bar", "host":"instances\/Bar", "name":"Bar Process", "type":"rollout", "uniqueId":2},
			{"defaultNamespace":"ticket.client.baz", "host":"instances\/Baz", "name":"Baz Service", "type":"serviceContract", "uniqueId":3}
		];

		var url = BASE_URL + '/services/endpoint/';

		scope = $rootScope.$new();

		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.expectGET(url).respond(200, returnData);

		service = $injector.get('Endpoints');
	}));

	it('should return the endpoints', inject(function () {

		var promise = service.get().then(function(response) {
			scope.data = response;
		});

		$httpBackend.flush();
		scope.$apply();

		expect(scope.data).toEqual(returnData);
	}));

	it('should return the endpoint by id', inject(function () {

		var promise = service.getById(2).then(function(response) {
			scope.data = response;
		});

		$httpBackend.flush();
		scope.$apply();

		expect(scope.data).toEqual(returnData[1]);
	}));
});
