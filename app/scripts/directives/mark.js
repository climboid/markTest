'use strict';

angular.module('markTestApp')
  .directive('mark', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('hey man this is mark');
      }
    };
  });
