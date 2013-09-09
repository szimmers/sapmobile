'use strict';

describe('Filter: statusDataHistogram', function () {

  // load the filter's module
  beforeEach(module('sapmobileApp'));

  // initialize a new instance of the filter before each test
  var statusDataHistogram;
  beforeEach(inject(function ($filter) {
    statusDataHistogram = $filter('statusDataHistogram');
  }));

  it('should return the input prefixed with "statusDataHistogram filter:"', function () {
    var text = 'angularjs';
    expect(statusDataHistogram(text)).toBe('statusDataHistogram filter: ' + text);
  });

});
