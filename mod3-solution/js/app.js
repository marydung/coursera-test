(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

//FoundItemsDirective.$inject[];
function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&',
      showError: '<'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this
  menu.searchTerm = "";
  menu.found = [];
  menu.showError = false;

  menu.getMatchedMenuItems = function() {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

    promise.then(function (response) {
      //console.log("controller response="+response);
      menu.found = response;

      if (!menu.found || !menu.searchTerm || menu.found.length == 0)
        menu.showError = true;
      else
        menu.showError = false;
    })
    .catch(function (error) {
      console.log(error);
      menu.showError = true;
    })

  };

  menu.removeItem = function (itemIndex) {
    //console.log("'this' is: ", this);
    menu.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    }).then(function (result) {
      var found = [];
      var menu_items = result.data.menu_items;
      if (searchTerm.length > 0) {
        for (var i = 0; i < menu_items.length; i++) {
          if (menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1)
            found.push(menu_items[i]);
        };
      }
      console.log("service found " + found.length);
      return found;
    });
  };

}

})();
