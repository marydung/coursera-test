(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    var promise = MenuService.getMenuItem($ctrl.user.favorite);
    promise.then(function(response){
      $ctrl.completed = true;
      MenuService.putMyInfo($ctrl.user.firstname,$ctrl.user.lastname,$ctrl.user.email,$ctrl.user.phone,$ctrl.user.favorite,response.data);
      $ctrl.message = "Your information has been saved.";
      $ctrl.testdata = response.data;
    })
    .catch(function (error) {
      $ctrl.errorMessage = "No such menu number exists.";
    })
  };
}

})();
