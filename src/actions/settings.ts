import Actions from "../types/actions";
import { Dispatch } from "react";
import IDispatch from "../types/dispatch";

export function selectTemperature(temperature: string, dispatch: Dispatch<IDispatch>) {
  return dispatch({
    type: Actions.SELECT_TEMPERATURE,
    payload: { temperature }
  });
};

export function selectSpeed(speed: string, dispatch: Dispatch<IDispatch>) {
  return dispatch({
    type: Actions.SELECT_SPEED,
    payload: { speed }
  });
};
