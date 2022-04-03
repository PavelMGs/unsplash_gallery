import { Photo } from "../../types/photo";
import { SET_MORE, SET_PHOTOS } from "../actions/actionTypes";

export type PhotosState = Map<string, Photo>; // we use Map here to avoid duplicates from unsplash

export type PhotosAction = {
  type: string;
  payload?: Photo[];
};

const photosReducer = (state: PhotosState = new Map, action: PhotosAction) => {
  switch (action.type) {

    case SET_PHOTOS:
      const mappedPayload = action.payload?.map((item: Photo) => {
        const { id, ...rest } = item;
        return [id, rest] as [ string, Photo ];
      })
      const newMap = new Map<string, Photo>(mappedPayload);
      return newMap;

    case SET_MORE: 
      const newMapSate = new Map(state)
      action.payload?.forEach((item) => {
        const { id, ...rest } = item;
        newMapSate.set(id as string, rest);
      })
      return newMapSate;

    default:
      return state;
  }
};

export default photosReducer;
