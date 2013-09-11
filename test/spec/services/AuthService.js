'use strict';

describe('Service: AuthService', function () {

	describe('when the app starts', function() {

		beforeEach(module('siteTicketPortal'));
		beforeEach(module('siteTicketPortal.AuthService'));

		var service;

		beforeEach(inject(function ($injector) {
			service = $injector.get('Auth');
		}));

		it('should indicate by default that no one is logged in', function () {
			expect(service.isLoggedIn()).toBe(false);
		});
	});

	describe('when i log in correctly', function() {

		beforeEach(module('siteTicketPortal'));
		beforeEach(module('siteTicketPortal.AuthService'));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		var service, $httpBackend, scope, username, password, returnData;

		beforeEach(inject(function ($injector, $rootScope, BASE_URL) {

			username = 'larry';
			password = 'larry123';
			//var authString = 'Basic bGFycnk6bGFycnkxMjM=';
			returnData = {"emailAddress":"larry@larry.com", "firstName":"Larry", "lastName":"McTim", "uniqueId":1, "userName":"larry"};
			var url = BASE_URL + '/services/user/' + username;

			scope = $rootScope.$new();

			$httpBackend = $injector.get('$httpBackend');
			$httpBackend.expectGET(url).respond(200, returnData);

			service = $injector.get('Auth');
		}));

		it('should return a user object', inject(function () {

			var promise = service.login(username, password).then(function(response) {
				scope.data = response;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(scope.data.userName).toEqual(username);
		}));

		it('should set the logged in flag', inject(function () {

			var promise = service.login(username, password).then(function(response) {
				scope.data = response;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(service.isLoggedIn()).toBe(true);
		}));

		it('should set the user object', inject(function () {

			var promise = service.login(username, password).then(function(response) {
				scope.data = response;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(service.getUser()).toBeTruthy();
		}));
	});

	describe('when i log in incorrectly', function() {

		beforeEach(module('siteTicketPortal'));
		beforeEach(module('siteTicketPortal.AuthService'));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		var service, $httpBackend, scope, username, password, returnData;

		beforeEach(inject(function ($injector, $rootScope, BASE_URL) {

			username = 'larry';
			password = '';
			returnData = 'error';
			var url = BASE_URL + '/services/user/' + username;

			scope = $rootScope.$new();

			$httpBackend = $injector.get('$httpBackend');
			$httpBackend.expectGET(url).respond(400, returnData);

			service = $injector.get('Auth');
		}));

		it('should produce an error', inject(function () {

			var promise = service.login(username, password).then(function(response) {
				scope.data = response;
			}, function (reason) {
				scope.data = reason;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(scope.data.data).toEqual(returnData);
		}));

		it('should clear the logged in flag', inject(function () {

			var promise = service.login(username, password).then(function(response) {
				scope.data = response;
			}, function (reason) {
				scope.data = reason;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(service.isLoggedIn()).toBe(false);
		}));

		it('should clear the user object', inject(function () {

			var promise = service.login(username, password).then(function(response) {
				scope.data = response;
			}, function (reason) {
				scope.data = reason;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(service.getUser()).toBeUndefined();
		}));
	});

	describe('when i log out', function() {

		beforeEach(module('siteTicketPortal'));
		beforeEach(module('siteTicketPortal.AuthService'));

		var service, scope;

		beforeEach(inject(function ($injector, $rootScope) {
			scope = $rootScope.$new();
			service = $injector.get('Auth');
		}));

		it('should return a cleared user object', inject(function () {

			var promise = service.logout().then(function(response) {
				scope.data = response;
			});

			scope.$apply();

			expect(scope.data).toBeUndefined();
		}));

		it('should clear the logged in flag', inject(function () {

			var promise = service.logout().then(function(response) {
				scope.data = response;
			});

			scope.$apply();

			expect(service.isLoggedIn()).toBe(false);
		}));

		it('should clear the user object', inject(function () {

			var promise = service.logout().then(function(response) {
				scope.data = response;
			});

			scope.$apply();

			expect(service.getUser()).toBeUndefined();
		}));
	});
});
