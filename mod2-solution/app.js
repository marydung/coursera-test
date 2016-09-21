(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuy LIST #1 - controller
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getItems();

  toBuyList.removeItem = function (itemIndex) {
    try {
    ShoppingListCheckOffService.removeItem(itemIndex);
  } catch (error) {
    toBuyList.errorMessage = error.message;
  }

  };
}

// Bought LIST #2 - controller
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  boughtList.errorMessage = "Nothing bought yet";

}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{name:"cookies",quantity:10},
  {name:"apples",quantity:5},
  {name:"pears",quantity:6},
  {name:"oranges",quantity:8},
  {name:"carrots",quantity:10},
  ];
  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    var item = {
      name: items[itemIdex].name,
      quantity: items[itemIdex].quantity
    };

    boughtItems.push(item); // push item to bought list
    items.splice(itemIdex, 1); // remove item from to buy list

   if (items.length == 0) {
     throw new Error("Everything is bought!");
    }

  };

  service.getItems = function () {
    return items;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
