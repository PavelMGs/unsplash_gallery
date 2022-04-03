import { combineReducers } from "redux";
import photosReducer from "./photos";

const reducers = combineReducers({
  photos: photosReducer,
});

export default reducers;
