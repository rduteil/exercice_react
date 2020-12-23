import React from "react";
import PropTypes from "prop-types";

class ComicComponent extends React.Component {
  render = () => {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
        <div>{this.props.issueNumber}</div>
      </div>
    );
  };
}

ComicComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  issueNumber: PropTypes.number.isRequired
};

export default ComicComponent;
