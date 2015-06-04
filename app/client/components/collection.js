var React           = require('react');
var Artifact        = require('./artifact');
var CollectionForm  = require('./collectionForm');
var LibraryActions  = require('../actions/actions');

var LibraryCollection = React.createClass({

  getName: function () {
    return this.props.collectionName || '[no collection name]';
  },

  getInitialState: function () {
    return null;
  },

  render: function () {
    var childArtifacts = this.props.artifacts.map(function (artifact) {
      return (
        <Artifact data={artifact} />
      );
    });

    return (
      <div>
        <h2>{this.getName()}</h2>
        {childArtifacts}
        <CollectionForm collectionFormCallback={} />
      </div>
    );
  }

});

module.exports = LibraryCollection;