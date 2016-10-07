(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService', 'items'];
function CategoriesListController(MenuDataService, items) {
  var catCtrl = this;
  catCtrl.items = items;
  //console.log("catCtrl.items="+catCtrl.items);
  //console.log("catCtrl.items="+catCtrl.items["0"].name);
}

})();
