import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});


export default reducers; 


//return type of reducers
export type RootState = ReturnType<typeof reducers>;