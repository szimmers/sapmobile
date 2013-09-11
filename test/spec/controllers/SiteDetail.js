'use strict';

describe('Controller: SiteDetailCtrl', function () {

	// load the controller's module
	beforeEach(module('siteTicketPortal'));

	var SiteDetailCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();

		var site = {"address1":"168 N. Pinest Ave", "address2":"", "altPhone":"", "brandKey":"BAR", "city":"MEMPHIS",
			"emailAddress":"", "primaryPhone":"909-345-9253", "siteIdentifier":"54321", "state":"TN", "zip":"38116 "};

		SiteDetailCtrl = $controller('SiteDetailCtrl', {
			$scope: scope,
			site: site
		});
	}));

	it('should attach the site to the scope', function () {
		expect(scope.site.brandKey).toBe('BAR');
	});

});
