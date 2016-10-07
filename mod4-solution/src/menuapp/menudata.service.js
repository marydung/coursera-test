(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;
  // console.log("MenuDataService");

  service.getAllCategories = function () {
    // console.log("MenuDataService.getAllCategories()");
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      return result.data;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    // console.log('MenuDataService.getItemsForCategory categoryShortName='+categoryShortName);

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: { category: categoryShortName}
    }).then(function (result) {
      return result.data;
    });

   };
}

})();
