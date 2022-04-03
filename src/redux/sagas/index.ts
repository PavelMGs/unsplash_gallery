import { all } from "redux-saga/effects";
import watchPhotos from "./photos";

function* rootSaga() {
  yield all([
    watchPhotos()
  ]);
}

export default rootSaga;
