'use strict';

describe('Directive: mark', function () {

  // load the directive's module
  beforeEach(module('markTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mark></mark>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mark directive');
  }));
});
