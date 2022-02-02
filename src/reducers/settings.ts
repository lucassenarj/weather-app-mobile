import { Reducer } from "react";
import Actions from "../types/actions";
import IDispatch from "../types/dispatch";
import ISettings from "../types/settings";
import IStorage from "../types/storage";
import setItemOnStorage from "../utils/setItemOnStorage";

export const settingsReducer: Reducer<ISettings, IDispatch> = (state, action): ISettings => {
  const { type, payload } = action;
  switch(type) {
    case Actions.SELECT_TEMPERATURE: {
      const { temperature } = payload;
      setItemOnStorage(IStorage.SETTINGS, {...state, temperature});
      return {
        ...state,
        temperature,
      }
    };
    case Actions.SELECT_DISTANCE: {
      const { distance } = payload;
      setItemOnStorage(IStorage.SETTINGS, {...state, distance});
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