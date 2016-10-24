(function () {
"use strict";

angular.module('common')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo'];
function MyInfoController(myInfo) {
    var $ctrl = this;
    $ctrl.myInfo = myInfo;
}

})();
