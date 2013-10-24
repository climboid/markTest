'use strict';

angular.module('markTestApp')
  .controller('MainCtrl', function ($scope, $compile) {

    $scope.makeMarks = function(){
			var chart = angular.element(document.createElement('mark'));
			angular.element(document.getElementById("markContaienr")).append(chart);
			$compile( chart )( $scope );
    }

  });
