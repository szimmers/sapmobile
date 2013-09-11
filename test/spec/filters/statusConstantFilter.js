'use strict';

describe('Filter: statusConstantFilter', function () {

	// load the filter's module
	beforeEach(module('siteTicketPortal'));

	// initialize a new instance of the filter before each test
	var statusConstantFilter;
	beforeEach(inject(function ($filter, statusConstants) {
		statusConstantFilter = $filter('statusConstantFilter');
	}));

	it('should return New for a status of 1', function () {
		expect(statusConstantFilter(1)).toBe('New');
	});

	it('should return Completed for a status of statusConstants.Completed', inject(function (statusConstants) {
		expect(statusConstantFilter(statusConstants.Completed)).toBe('Completed');
	}));

	it('should return Unknown for a status that does not exist', function () {
		expect(statusConstantFilter(-1)).toBe('Unknown');
	});

});
