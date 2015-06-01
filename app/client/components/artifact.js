var $     = require('jquery');
var React = require('react');
var ArtifactForm = require('./artifactForm');

var Artifact = React.createClass({
  getInitialState: function () {
    return {
      active: false,
      edit: false
    };
  },
  handleHover: function () {
    this.setState({
      active: true
    });
  },
  handleHoverEnd: function () {
    this.setState({
      active: false
    });
  },
  handleEditClick: function () {
    this.setState({
      edit: !this.state.edit
    });
  },
  showEditButton: function () {
    return (
      <button onClick={this.handleEditClick}>Edit</button>
    );
  },
  showEditForm: function () {
    return (
      <ArtifactForm />
    );
  },
  render: function () {
    var editButton = (this.state.active || this.state.edit) ? this.showEditButton() : null;
    var editForm = this.state.edit ? this.showEditForm() : null;
    return (
      <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverEnd}> 
        <h3>{this.props.data.title}</h3>
        <cite>{this.props.data.author}</cite>
        {editButton}
        {editForm}
      </div>
    );
  }
});

module.exports = Artifact;