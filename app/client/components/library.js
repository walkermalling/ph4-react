var React             = require('react');
var LibraryCollection = require('./libraryCollection');
var stores            = require('./stores');
var McFly             = require('mcfly');

var Flux = new McFly();
var _libstore = stores.library;

var seedCollections = [
  { 
    name: 'Fiction',
    artifacts: [
      {
        title: 'Lord of the Rings',
        author: 'JRR Tolkien'
      },
      {
        title: 'Cryptonomicon',
        author: 'Neal Stephenson'
      }
    ]
  },
  { 
    name: 'Philosophy',
    artifacts: [
      {
        title: 'Being and Time',
        author: 'Martin Heidegger'
      },
      {
        title: 'Experience',
        author: 'Ralph Waldo Emerson'
      }
    ]
  },
  { 
    name: 'Poetry',
    artifacts: [
      {
        title: 'Essay on Criticism',
        author: 'Alexander Pope'
      },
      {
        title: 'Dreamsongs',
        author: 'John Berryman'
      }
    ]
  },
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
);

var LibraryActions = Flux.createActions({
  addCollection: function (data){
     return {
        actionType: "ADD_COLLECTION",
        collection: data
     };
  }
});

function getCollections(){
   return LibraryStore.getCollections();
}

var LibraryController = React.createClass({
    getInitialState: function(){
        return getCollections();
    },
    onChange: function() {
        this.setState(getCollections());
    },
    render: function() {
      console.log(this.state.collections);
      var childCollections = this.state.collections.map(function (collection) {
        return (
          <LibraryCollection 
            artifacts={collection.artifacts} 
            collectionName={collection.name} />
        );
      });
      return (
        <div>
          {childCollections}
        </div>
      )
    }
});

module.exports = LibraryController;