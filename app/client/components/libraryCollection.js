var React     = require('react');
var Artifact  = require('./artifact');

var collectionTitleStyle = {
  color: '000',
  margin: '5px 0'
};

var LibraryCollection = React.createClass({

  getName: function () {
    return this.props.collectionName || '[no collection name]';
  },

  render: function () {

    var childArtifacts = this.props.data.map(function (artifact) {
      return (
          <Artifact data={artifact} key={artifact.id} />
      );
    });

    return (
      <div>
        <h2 style={collectionTitleStyle}>{this.getName()}</h2>
        {childArtifacts}
      </div>
    );

  }

});

module.exports = LibraryCollection;