import { combineReducers } from "redux";
import repositoriseReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriseReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
