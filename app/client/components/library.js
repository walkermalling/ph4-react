var React             = require('react');
var LibraryCollection = require('./libraryCollection');

var Library = React.createClass({
  getInitialState: function () {
    return {
      data: [
        {title: 'book one', author: 'Johannes'},
        {title: 'book two', author: 'Kimkura'},
        {title: 'book three', author: 'Sigfried'}
      ]
    };
  },
  render: function () {
    return (
        <div>
          <h1>The Library</h1>
          <LibraryCollection 
            collectionName="First Collection"
            data={this.state.data} />
        </div>
      );
  }
});

module.exports = Library;