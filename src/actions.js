export const Actions = {
  GET_CHARACTERS_PENDING: "GET_CHARACTERS_PENDING",
  GET_CHARACTERS_SUCCESS: "GET_CHARACTERS_SUCCESS",
  GET_CHARACTERS_FAILURE: "GET_CHARACTERS_FAILURE",
  CHOOSE_CHARACTER: "CHOOSE_CHARACTER",
  GET_COMICS_PENDING: "GET_COMICS_PENDING",
  GET_COMICS_SUCCESS: "GET_COMICS_SUCCESS",
  GET_COMICS_FAILURE: "GET_COMICS_FAILURE"
};

export const ActionTypes = {
  getCharactersPending: () => ({ type: Actions.GET_CHARACTERS_PENDING }),
  getCharactersSuccess: (characters) => ({
    type: Actions.GET_CHARACTERS_SUCCESS,
    characters
  }),
  getCharactersFailure: (error) => ({
    type: Actions.GET_CHARACTERS_FAILURE,
    error
  }),
  chooseCharacter: (id) => ({
    type: Actions.CHOOSE_CHARACTER,
    id
  }),
  getComicsPending: (id) => ({
    type: Actions.GET_COMICS_PENDING,
    id
  }),
  getComicsSuccess: (comics) => ({ type: Actions.GET_COMICS_SUCCESS, comics }),
  getComicsFailure: (error) => ({ type: Actions.GET_COMICS_FAILURE, error })
};
