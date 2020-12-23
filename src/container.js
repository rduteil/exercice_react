import { connect } from "react-redux";

import { Actions } from "./actions";
import RootComponent from "./rootComponent";

export default connect(
  (state) => ({
    getCharactersPending: state.getCharactersPending,
    getComicsPending: state.getComicsPending,
    getCharactersError: state.getCharactersError,
    getComicsError: state.getComicsError,
    characters: state.characters,
    character: state.character,
    comics: state.comics
  }),
  (dispatch) => ({
    onGetCharacters: () => dispatch(Actions.getCharactersPending()),
    onChooseCharacter: (id) => dispatch(Actions.CHOOSE_CHARACTER(id)),
    onGetComics: (id) => dispatch(Actions.getComicsPending(id))
  })
)(RootComponent);
