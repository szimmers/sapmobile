'use strict';

describe('Controller: NavCtrl', function () {

	// load the controller's module
	beforeEach(module('siteTicketPortal'));

	var NavCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		NavCtrl = $controller('NavCtrl', {
			$scope: scope
		});
	}));

	it('should default to the user not logged in', function () {
		expect(scope.loggedIn).toBe(false);
	});

	it('should know when the login status has changed', function () {
		var loginChangedFlag = false;
		var listener = jasmine.createSpy('loginChangeListener');
		scope.$on('loginStatusChanged', listener);

		runs(function() {
			setTimeout(function() {
				scope.$broadcast('loginStatusChanged', true, {});
				loginChangedFlag = true;
			}, 500);
		});

		waitsFor(function() {
			return loginChangedFlag;
		}, 'should be completed', 750);

		runs(function() {
			expect(listener).toHaveBeenCalled();
		});
	});

	it('should indicate the user is logged in when an event says so', function () {
		var loginChangedFlag = false;
		var listener = jasmine.createSpy('loginChangeListener');
		scope.$on('loginStatusChanged', listener);

		runs(function() {
			setTimeout(function() {
				scope.$broadcast('loginStatusChanged', true, {});
				loginChangedFlag = true;
			}, 500);
		});

		waitsFor(function() {
			return loginChangedFlag;
		}, 'should be completed', 750);

		runs(function() {
			expect(scope.loggedIn).toBe(true);
		});
	});

	it('should indicate the user is not logged in when an event says so', function () {
		var loginChangedFlag = false;
		var listener = jasmine.createSpy('loginChangeListener');
		scope.$on('loginStatusChanged', listener);

		runs(function() {
			setTimeout(function() {
				scope.$broadcast('loginStatusChanged', false, null);
				loginChangedFlag = true;
			}, 500);
		});

		waitsFor(function() {
			return loginChangedFlag;
		}, 'should be completed', 750);

		runs(function() {
			expect(scope.loggedIn).toBe(false);
		});
	});

	it('should know the username when the user logs in', function () {
		var loginChangedFlag = false;
		var listener = jasmine.createSpy('loginChangeListener');
		scope.$on('loginStatusChanged', listener);

		runs(function() {
			setTimeout(function() {
				scope.$broadcast('loginStatusChanged', true, {"username":"larry"});
				loginChangedFlag = true;
			}, 500);
		});

		waitsFor(function() {
			return loginChangedFlag;
		}, 'should be completed', 750);

		runs(function() {
			expect(scope.user.username).toBe("larry");
		});
	});

});
