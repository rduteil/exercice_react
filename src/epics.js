import { mergeMap, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import { Actions, ActionTypes } from "./actions";
import { ApiKey } from "./key";

export const getCharactersEpic = (action$, store$) => {
  return action$.ofType(Actions.GET_CHARACTERS_PENDING).pipe(
    mergeMap((action) => {
      return ajax({
        url: `https://gateway.marvel.com/v1/public/characters?apiKey=${ApiKey}`,
        method: "GET"
      }).pipe(
        mergeMap((characters) => {
          return [
            ActionTypes.getCharactersSuccess(
              characters.data.results.map((c) => ({
                name: c.name,
                id: c.id
              }))
            )
          ];
        }),
        catchError((error) => {
          return [ActionTypes.getCharactersFailure(0)];
        })
      );
    })
  );
};

export const getComicsEpic = (action$, store$) => {
  return action$.ofType(Actions.GET_COMICS_PENDING).pipe(
    mergeMap((action) => {
      return ajax({
        url: `https://gateway.marvel.com/v1/public/characters/${action.id}/comics?apiKey=${ApiKey}`,
        method: "GET"
      }).pipe(
        mergeMap((comics) => {
          return [
            ActionTypes.getComicsSuccess(
              comics.data.results.map((c) => ({
                id: c.id,
                title: c.title,
                description: c.description,
                issueNumber: c.issueNumber
              }))
            )
          ];
        }),
        catchError((error) => {
          return [ActionTypes.getComicsFailure(0)];
        })
      );
    })
  );
};
