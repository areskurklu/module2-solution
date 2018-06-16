(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService );

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService ) {
  var toBuyList = this;

  toBuyList.items =  ShoppingListCheckOffService.getItems();

 //this moves from the toBuyList to BoughtList
  toBuyList.moveItem = function (itemIndex) {
     ShoppingListCheckOffService.moveItem(itemIndex);
   };

}

//list of bought items
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService ) {
  var purchasedList = this;

  purchasedList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
  var service = this;

  //keep track of bought items
  var  boughtItems= [];

  // List of shopping items
  var items = [
   { name: "bread", quantity: 1 },
   { name: "milk", quantity: 2},
   { name: "choclate", quantity: 5 },
   { name: "chips", quantity: 4 },
   { name: "cookies", quantity: 10 }
  ];

 service.moveItem = function (itemIndex) {
   //add to boughtItems
   boughtItems.push(items[itemIndex]);

   //to remove from items
   items.splice(itemIndex, 1);
  }

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
