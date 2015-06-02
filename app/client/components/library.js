var React             = require('react');
var LibraryCollection = require('./libraryCollection');
var stores = require('./components/stores');
var McFly = require('mcfly');

var Flux = new McFly();
var _libstore = stores.library;

var seedCollections = [
  {name: 'Fiction'},
  {name: 'Philosophy'},
  {name: 'Poetry'}
];
_libstore.collections = [];
seedCollections.forEach(function (collection) {
  _libstore.collections.push(collection);
});

function addCollection (data) {
  _libstore.push(data);
}
var LibraryStore = Flux.createStore({
    getCollections: function () {
      return _libstore;
    }
  }, function (payload) {
    switch (payload.actionType) {
      case ('ADD_COLLECTION'):
        addCollection(payload.data);
        LibraryStore.emitChange();
        break;
    }
  }
});

var LibraryActions = Flux.createActions({
  addCollection: function (data){
     return {
        actionType: "ADD_COLLECTION",
        collection: data
     }
  }
});

function getCollections(){
   return {
       collections: LibraryStore.getCollections()
   }
}

var LibraryController = React.createClass({
    getInitialState: function(){
        return getCollections();
    },
    onChange: function() {
        this.setState(getCollections());
    },
    render: function() {
        return <LibraryCollection collections={this.state.collections} />;
    }
});

module.exports = LibraryController;