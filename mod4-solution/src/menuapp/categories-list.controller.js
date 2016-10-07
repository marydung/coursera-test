(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var catCtrl = this;
  catCtrl.items = items;
  //console.log("catCtrl.items="+catCtrl.items);
  //console.log("catCtrl.items="+catCtrl.items["0"].name);
}

})();
