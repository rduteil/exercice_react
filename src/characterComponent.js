import React from "react";
import PropTypes from "prop-types";

class CharacterComponent extends React.Component {
  render = () => {
    return (
      <div>
        <div>{this.props.name}</div>
      </div>
    );
  };
}

CharacterComponent.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default CharacterComponent;
