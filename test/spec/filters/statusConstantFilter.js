'use strict';

describe('Filter: statusConstantFilter', function () {

  // load the filter's module
  beforeEach(module('sapmobileApp'));

  // initialize a new instance of the filter before each test
  var statusConstantFilter;
  beforeEach(inject(function ($filter) {
    statusConstantFilter = $filter('statusConstantFilter');
  }));

  it('should return the input prefixed with "statusConstantFilter filter:"', function () {
    var text = 'angularjs';
    expect(statusConstantFilter(text)).toBe('statusConstantFilter filter: ' + text);
  });

});
