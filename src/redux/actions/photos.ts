import { Photo } from "../../types/photo";
import { GET_PHOTOS, SET_MORE, SET_PHOTOS } from "./actionTypes";

export const getPhotos = (page: number = 1) => ({
  type: GET_PHOTOS,
  payload: { page },
});

export const setPhotos = (payload: Photo[]) => ({
  type: SET_PHOTOS,
  payload,
});

export const setMore = (payload: Photo[]) => ({
  type: SET_MORE,
  payload,
});
