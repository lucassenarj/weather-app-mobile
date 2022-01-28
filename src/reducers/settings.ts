import { Reducer } from "react";
import Actions from "../types/actions";
import IDispatch from "../types/dispatch";
import ISettings from "../types/settings";

export const settingsReducer: Reducer<ISettings, IDispatch> = (state, action): ISettings => {
  const { type, payload } = action;
  switch(type) {
    case Actions.SELECT_TEMPERATURE: {
      const { temperature } = payload;
      return {
        ...state,
        temperature,
      }
    };
    case Actions.SELECT_DISTANCE: {
      const { distance } = payload;
      return {
        ...state,
        distance,
      }
    }
    default: {
      return state;
    }
  }
}