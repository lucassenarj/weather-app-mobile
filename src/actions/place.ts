import { Dispatch } from "react";
import Actions from "../types/actions";
import IDispatch from "../types/dispatch";
import ILocation from "../types/location";

export function selectPlace(place: ILocation, dispatch: Dispatch<IDispatch>) {
  return dispatch({
    type: Actions.SELECT_PLACE,
    payload: { place }
  });
};
