var $     = require('jquery');
var React = require('react');

var ArtifactForm = React.createClass({
  render: function () {
    return (
      <div> 
        <form>
          <input type="text" name="artifactName"/>
          <input type="text" name="artifactType"/>
          <input type="text" name="artifactAuthor"/>
          <textarea name="artifactNotes"></textarea>
        </form>
      </div>
    );
  }
});

module.exports = ArtifactForm;
