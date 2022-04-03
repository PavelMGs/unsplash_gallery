import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from "./reducers";
import { PhotosState } from "./reducers/photos";

export type RootState = {
  photos: PhotosState;
};

export const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
