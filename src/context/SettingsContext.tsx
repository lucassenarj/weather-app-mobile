import React, { createContext, Dispatch, useReducer } from "react";
import { settingsReducer } from "../reducers/settings";
import IDispatch from "../types/dispatch";
import ISettings from "../types/settings";
import useAsyncStore from "../hooks/useAsyncStore";
import IDistance from "../types/distance";
import ITemperature from "../types/temperature";

type IContext = {
  settings: ISettings,
  dispatch: Dispatch<IDispatch>;
}

export const SettingsContext = createContext({} as IContext);

let initialState = {
  distance: IDistance.KILOMETERS,
  temperature: ITemperature.CELSIUS,
};

useAsyncStore().then(({ settings }) => initialState = settings);

export function SettingsProvider({ children }) {
  const [settings, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContext.Provider value={{ settings, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};
