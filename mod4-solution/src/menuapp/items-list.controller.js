(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);

 ItemsListController.$inject = ['items'];
   function ItemsListController(items) {
     var itemCtr = this;
     itemCtr.items = items.menu_items;
     //console.log("itemCtr.items="+itemCtr.items);
   }

})();
