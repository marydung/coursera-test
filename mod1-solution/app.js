(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope', '$filter'];
function LunchCheckerController($scope, $filter) {
  $scope.list = "";
  $scope.msg = "";

  $scope.checkLunchItems = function() {
    var numItems = 0;
    var trimmedList = $scope.list.trim();
    numItems = trimmedList.split(',').length;
    console.log("numItems="+numItems)
    if (trimmedList.length == 0)
        $scope.msg = "Please enter data first";
    else if (numItems <= 3)
        $scope.msg = "Enjoy!"
    else
        $scope.msg = "Too much!";
  }
}

})();
