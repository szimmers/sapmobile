'use strict';

describe('Controller: LoginCtrl', function () {

	describe('when i provide good credentials', function() {

		beforeEach(module('siteTicketPortal'));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		var LoginCtrl, $httpBackend, scope, location;

		beforeEach(inject(function ($controller, $injector, $rootScope, $location, BASE_URL) {

			scope = $rootScope.$new();

			scope.username = 'larry';
			scope.password = 'larry123';

			var url = BASE_URL + '/services/user/' + scope.username;

			$httpBackend = $injector.get('$httpBackend');
			$httpBackend.expectGET(url).respond(200);
			location = $location;

			LoginCtrl = $controller('LoginCtrl', {
				$scope: scope
			});
		}));

		it('should route me to the main page', inject(function () {

			var promise = scope.loginUser().then(function(response) {
				scope.data = response;
			}, function (reason) {
				scope.data = reason;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(location.path()).toBe("/#");
		}));
	});

	describe('when i provide bad credentials', function() {

		beforeEach(module('siteTicketPortal'));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		var LoginCtrl, $httpBackend, scope, location;

		beforeEach(inject(function ($controller, $injector, $rootScope, $location, BASE_URL) {

			scope = $rootScope.$new();

			scope.username = 'larry';
			scope.password = '';

			var url = BASE_URL + '/services/user/' + scope.username;

			$httpBackend = $injector.get('$httpBackend');
			$httpBackend.expectGET(url).respond(401);
			location = $location;

			LoginCtrl = $controller('LoginCtrl', {
				$scope: scope
			});
		}));

		it('should route me back to the login page', inject(function () {

			var promise = scope.loginUser().then(function(response) {
				scope.data = response;
			}, function (reason) {
				scope.data = reason;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(location.path()).toBe("/login");
		}));
	});
});
