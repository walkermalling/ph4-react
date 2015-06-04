var stores            = require('./stores');
var McFly             = require('mcfly');

var Flux = new McFly();

var _libstore = stores.library;

// TODO: use flatfile db
// extract seed to gulp task

(function seedDB() {

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

})()


var LibraryStore = Flux.createStore({
    getCollections: function () {
      return _libstore;
    },
    addCollection: function (data) {
      _libstore.push(data);
    }
  }, function (payload) {
    switch (payload.actionType) {
      case ('ADD_COLLECTION'):
        this.addCollection(payload.data);
        this.emitChange();
        break;
      case ('GET_COLLECTIONS'):
        this.getCollections();
        this.emitChange();
        break;
    }
  }
);

module.exports = LibraryStore;