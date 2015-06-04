var React             = require('react');
var LibraryCollection = require('./collection');
var LibraryStore      = require('../stores/libraryStore');

var LibraryController = React.createClass({
    getInitialState: function(){
        return {
          store: LibraryStore.getCollections()
        }
    },
    onChange: function() {
        this.setState(LibraryStore.getCollections());
    },
    componentWillMount: function () {},
    componentWillUnmount: function () {},
    render: function() {
      console.log(this.state.collections);
      var childCollections = this.state.store.collections.map(function (collection) {
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