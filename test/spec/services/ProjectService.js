'use strict';

describe('Service: ProjectService', function () {

	describe('when i need projects', function() {
		beforeEach(module('siteTicketPortal'));
		beforeEach(module('siteTicketPortal.ProjectService'));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		var service, $httpBackend, scope, projects, tickets;

		beforeEach(inject(function ($injector, $rootScope, BASE_URL) {

			projects = [
				{"endpointId":2, "name":"Green Onion Slicer", "status":6, "type":"rollout", "uniqueId":1},
				{"endpointId":3, "name":"Happy Fun Ball", "status":6, "type":"rollout", "uniqueId":2}
			];

			var url = BASE_URL + '/services/project/';

			scope = $rootScope.$new();

			$httpBackend = $injector.get('$httpBackend');
			$httpBackend.expectGET(url).respond(200, projects);

			service = $injector.get('Projects');
		}));

		it('should return the projects', inject(function () {

			var promise = service.get().then(function(response) {
				scope.data = response;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(scope.data).toEqual(projects);
		}));

		it('should return the project by id', inject(function () {

			var promise = service.getById(1).then(function(response) {
				scope.data = response;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(scope.data).toEqual(projects[0]);
		}));

	});

	describe('when i need tickets', function() {
		beforeEach(module('siteTicketPortal'));
		beforeEach(module('siteTicketPortal.ProjectService'));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		var service, $httpBackend, scope, project, tickets, endpoints;

		beforeEach(inject(function ($injector, $rootScope, BASE_URL) {

			project = {"endpointId":2, "name":"Green Onion Slicer", "status":6, "type":"rollout", "uniqueId":1};

			tickets = [
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

			endpoints = [
				{"defaultNamespace":"ticket.client.foo", "host":"instances\/Foo", "name":"Foo Process", "type":"rollout", "uniqueId":1},
				{"defaultNamespace":"ticket.client.bar", "host":"instances\/Bar", "name":"Bar Process", "type":"rollout", "uniqueId":2},
				{"defaultNamespace":"ticket.client.baz", "host":"instances\/Baz", "name":"Baz Service", "type":"serviceContract", "uniqueId":3}
			];

			var endpointUrl = BASE_URL + '/services/endpoint/';
			var endpointHost = 'instances/Bar';
			var ticketUrl = BASE_URL + '/' + endpointHost + '/services/project/' + project.uniqueId + '/';

			scope = $rootScope.$new();

			$httpBackend = $injector.get('$httpBackend');

			$httpBackend.expectGET(endpointUrl).respond(200, endpoints);
			$httpBackend.expectGET(ticketUrl).respond(200, tickets);

			service = $injector.get('ProjectTickets');
		}));

		it('should return the tickets', inject(function () {

			var promise = service.get(project).then(function(response) {
				scope.data = response;
			});

			$httpBackend.flush();
			scope.$apply();

			expect(scope.data).toEqual(tickets);
		}));
	});

});
