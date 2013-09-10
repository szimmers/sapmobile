'use strict';

describe('Controller: ProjectCtrl', function () {

	// load the controller's module
	beforeEach(module('siteTicketPortal'));

	var ProjectCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();

		var project = {"endpointId":2, "name":"Green Onion Slicer", "status":6, "type":"rollout", "uniqueId":1};

		var tickets = [
			{"assignedWorkItem":{"assignedUserId":-1, "completed":false, "deleted":false, "endpointId":2, "projectId":8, "purchaseOrderNumber":"111", "scheduledDate":null, "shippingDataReceived":false, "status":20, "type":"installation" },
				"site":{"address1":"741 W. Aft", "address2":"", "altPhone":"", "brandKey":"FOO", "city":"KENSINGTON", "primaryPhone":"301-992-2212", "siteIdentifier":"89383", "state":"MD", "zip":"20895      "},
				"siteWorkItem":{"assignedUserId":-1, "completed":false, "deleted":false, "endpointId":2, "projectId":8, "purchaseOrderNumber":"111", "scheduledDate":null, "shippingDataReceived":false, "status":25, "type":"siteRollout" }},
			{"assignedWorkItem":{"assignedUserId":-1, "completed":false, "deleted":false, "endpointId":2, "projectId":8, "purchaseOrderNumber":"222", "scheduledDate":"\/Date(1380171600000-0500)\/", "shippingDataReceived":false, "status":20, "type":"survey" },
				"site":{"address1":"212 N. Brump", "address2":"", "altPhone":"", "brandKey":"FOO", "city":"FLINT", "primaryPhone":"890-249-9711", "siteIdentifier":"73828", "state":"MI", "zip":"48504-7161 "},
				"siteWorkItem":{"assignedUserId":-1, "completed":false, "deleted":false, "endpointId":2, "projectId":8, "purchaseOrderNumber":"222", "scheduledDate":null, "shippingDataReceived":false, "status":24, "type":"siteRollout" }},
			{"assignedWorkItem":null, "site":{"address1":"16 N. Reep Ave", "address2":"", "altPhone":"", "brandKey":"FOO", "city":"MEMPHIS", "primaryPhone":"991-945-0953", "siteIdentifier":"98022", "state":"TN", "zip":"38116-3518 "},
				"siteWorkItem":{"assignedUserId":-1, "completed":true, "deleted":false, "endpointId":2, "projectId":8, "purchaseOrderNumber":"333", "scheduledDate":null, "shippingDataReceived":true, "status":3, "type":"siteRollout" }},
			{"assignedWorkItem":{"assignedUserId":-1, "completed":false, "deleted":false, "endpointId":2, "projectId":8, "purchaseOrderNumber":"007", "scheduledDate":"\/Date(1378530000000-0500)\/", "shippingDataReceived":false, "status":21, "type":"survey" },
				"site":{"address1":"501 Warbly St", "address2":"", "altPhone":"", "brandKey":"FOO", "city":"OCEAN SPRINGS", "primaryPhone":"928-895-7894", "siteIdentifier":"78322", "state":"MS", "zip":"39564      "},
				"siteWorkItem":{"assignedUserId":-1, "completed":false, "deleted":false, "endpointId":2, "projectId":8, "purchaseOrderNumber":"007", "scheduledDate":null, "shippingDataReceived":false, "status":24, "type":"siteRollout" }}
		];

		ProjectCtrl = $controller('ProjectCtrl', {
			$scope: scope,
			project: project,
			tickets: tickets
		});
	}));

	it('should attach the project to the scope', function () {
		expect(scope.project.name).toBe('Green Onion Slicer');
	});

	it('should attach the tickets to the scope', function () {
		expect(scope.tickets.length).toBe(4);
	});

	it('should set up the tabs', function () {
		expect(scope.tabs.length).toBeGreaterThan(0);
	});

	it('should select the first tab', function () {
		expect(scope.tabs.activeTab).toBe(0);
	});
});
