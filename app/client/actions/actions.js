var McFly = require('mcfly');

var Flux = new McFly();

var LibraryActions = Flux.createActions({
  addCollection: function (data){
     return {
        actionType: "ADD_COLLECTION",
        collection: data
     };
  }
});

module.exports = LibraryActions;