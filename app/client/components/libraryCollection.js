var React     = require('react');
var Artifact  = require('./artifact');

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
      </div>
    );
  }

});

module.exports = LibraryCollection;