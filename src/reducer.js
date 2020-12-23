import { Actions } from "./actions";

let initialState = {
  getCharactersPending: true,
  getComicsPending: false,
  getCharactersError: null,
  getComicsError: null,
  characters: [],
  character: null,
  comics: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CHARACTERS_PENDING: {
      return Object.assign({}, state, {
        getCharactersPending: true,
        getCharactersError: null
      });
    }
    case Actions.GET_CHARACTERS_FAILURE: {
      return Object.assign({}, state, {
        getCharactersPending: false,
        getCharactersError: action.error
      });
    }
    case Actions.GET_CHARACTERS_SUCCESS: {
      return Object.assign({}, state, {
        getCharactersPending: false,
        characters: [...action.characters],
        character: { ...action.characters[0] }
      });
    }
    case Actions.CHOOSE_CHARACTER: {
      let choosenCharacter = state.characters.find((c) => c.id === action.id);
      return Object.assign({}, state, {
        character: { ...choosenCharacter }
      });
    }
    case Actions.GET_COMICS_PENDING: {
      return Object.assign({}, state, {
        getComicsPending: true,
        getComicsError: null
      });
    }
    case Actions.GET_COMICS_FAILURE: {
      return Object.assign({}, state, {
        getComicsPending: false,
        getComicsError: action.error
      });
    }
    case Actions.GET_COMICS_SUCCESS: {
      return Object.assign({}, state, {
        getComicsPending: false,
        comics: [...action.comics]
      });
    }
    default: {
      return state;
    }
  }
};
