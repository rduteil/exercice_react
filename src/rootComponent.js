import React from "react";
import PropTypes from "prop-types";

import CharacterComponent from "./characterComponent";
import ComicComponent from "./comicComponent";

class RootComponent extends React.Component {
  componentDidMount = () => {
    this.props.onGetCharacters();
  };

  render = () => {
    if (this.props.getCharactersPending) {
      return <div> Récupération des personnages Marvel...</div>;
    } else {
      let charactersOptions = this.props.characters.map((c, i) => (
        <option value={c.id} key={i}>
          {c.name}
        </option>
      ));
      let charactersCards = this.props.characters.map((c, i) => (
        <CharacterComponent name={c.name} id={c.id} key={i} />
      ));
      let comics = null;
      if (this.props.getComicsPending) {
        comics = <div>Récupération des comics...</div>;
      } else if (this.props.comics.length !== 0) {
        comics = this.props.comics.map((c, i) => (
          <ComicComponent
            title={c.title}
            description={c.description}
            issueNumber={c.issueNumber}
            key={i}
          />
        ));
      }
      return (
        <div>
          <select
            value={this.props.character.id}
            onChange={(event) => {
              this.props.onChooseCharacter(event.target.value);
              this.props.onGetComics(event.target.value);
            }}
          >
            {charactersOptions}
          </select>
          {charactersCards}
          {comics}
        </div>
      );
    }
  };
}

RootComponent.propTypes = {
  getCharactersPending: PropTypes.bool.isRequired,
  getComicsPending: PropTypes.bool.isRequired,
  comics: PropTypes.array,
  characters: PropTypes.array,
  getCharactersError: PropTypes.number,
  getComicsError: PropTypes.number,
  character: PropTypes.object
};

export default RootComponent;
