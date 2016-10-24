(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getAllMenuItems = function () {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function(short_name) {
    var response = $http({
      url: (ApiPath + '/menu_items/'+short_name+'.json')
    });
    return response;
    // return $http.get(ApiPath + '/menu_items/'+short_name+'.json')
    //   .then(function (response) {
    //     return response.data;
    //   });
  }

  service.getMyInfo = function() {
    // return {firstname:"Mary"};
    return items;
  }

  var items = {firstname:"", lastname:"",email:"",phone:"",favorite:"",favMenuItem:""};
  service.putMyInfo = function(first_name,last_name,email,phone,favorite,favMenuItem) {
    items.firstname = first_name;
    items.lastname = last_name;
    items.email = email;
    items.phone = phone;
    items.favorite = favorite;
    items.favMenuItem = favMenuItem;
  }

}

})();
