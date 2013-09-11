'use strict';

describe('Service: AuthService', function () {

	// load the service's module
	beforeEach(module('siteTicketPortal'));
	beforeEach(module('siteTicketPortal.AuthService'));

	// instantiate service
	var service, $httpBackend, scope, username, password, returnData;

	beforeEach(inject(function ($injector, $rootScope, BASE_URL) {

		username = 'larry';
		password = 'larry123';
		//var authString = 'Basic bGFycnk6bGFycnkxMjM=';
		returnData = {"emailAddress":"larry@larry.com", "firstName":"Larry", "lastName":"McTim", "uniqueId":1, "userName":"larry"};
		var url = BASE_URL + '/services/user/' + username;

		//scope = $rootScope.$new();
		scope = $rootScope;

		debugger;
		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.expectGET(url).respond(200, returnData);

		service = $injector.get('Auth');

		/*
		service = $injector.get('Auth', {
			$scope: scope
		});
		*/
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	/*
	it('should GET service', function () {
		service.get();
		$httpBackend.flush();
	});
	*/

	/*
	it('should indicate by default that no one is logged in', function () {
		expect(service.isLoggedIn()).toBe(false);
	});
	*/

	it('should return a user object upon a successful login', inject(function () {

		debugger;

		var promise = service.login(username, password).then(function(response) {
			scope.data = response;
		});

		$httpBackend.flush();
		scope.$apply();

		expect(scope.data.userName).toEqual(username);
	}));

});
