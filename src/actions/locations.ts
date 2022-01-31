import { Dispatch } from "react";
import Actions from "../types/actions";
import IDispatch from "../types/dispatch";
import ILocation from "../types/location";

export function addLocation(location: ILocation, dispatch: Dispatch<IDispatch>) {
  return dispatch({
    type: Actions.ADD_LOCATION,
    payload: { location }
  });
};

export function removeLocation(woeid: number, dispatch: Dispatch<IDispatch>) {
  return dispatch({
    type: Actions.REMOVE_LOCATION,
    payload: { woeid },
  });
};
