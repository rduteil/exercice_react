import { createStore, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { getCharacterEpic, getComicsEpic } from "./epics";
import Reducer from "./reducer";

const epics = combineEpics(getCharacterEpic, getComicsEpic);
const epicMiddleware = createEpicMiddleware();

export const store = createStore(Reducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(epics);
