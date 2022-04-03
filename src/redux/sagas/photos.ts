import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../API";
import { GET_PHOTOS } from "../actions/actionTypes";
import { setMore, setPhotos } from "../actions/photos";

function * getPhotos (action: any): any {
  try {
    const { page } = action.payload;
    const photos = yield call(API.get, {
      endpoint: "photos",
      query: { page, order_by: 'popular' },
    });
    if (+page !== 1) {
      yield put(setMore(photos));
    } else {
      yield put(setPhotos(photos));
    }
  } catch (error) {
    console.log(error);
  }
}

function * watchPhotos () {
  yield takeEvery(GET_PHOTOS, getPhotos)
}

export default watchPhotos;
