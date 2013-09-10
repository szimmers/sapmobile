'use strict';

describe('Controller: MainCtrl', function () {

	// load the controller's module
	beforeEach(module('siteTicketPortal'));

	var MainCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();

		var projects = [
			{"endpointId":2, "name":"Green Onion Slicer", "status":6, "type":"rollout", "uniqueId":1},
			{"endpointId":2, "name":"Foo Rollout", "status":6, "type":"rollout", "uniqueId":2},
			{"endpointId":2, "name":"Foo not started", "status":1, "type":"rollout", "uniqueId":3},
			{"endpointId":5, "name":"Foo Service", "status":6, "type":"serviceContract", "uniqueId":4}
		];

		MainCtrl = $controller('MainCtrl', {
			$scope: scope,
			projects: projects
		});
	}));

	it('should attach the project list to the scope', function () {
		expect(scope.projects.length).toBe(4);
	});

	it('should filter out new (status == 1) projects', function () {
		expect(scope.hideNewStatus(scope.projects[2])).toBe(false);
	});

	it('should not filter out rollout (status == 6) projects', function () {
		expect(scope.hideNewStatus(scope.projects[0])).toBe(true);
	});
});
