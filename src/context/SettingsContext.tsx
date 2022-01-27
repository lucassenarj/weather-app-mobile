import React, { createContext, Dispatch, useReducer } from "react";
import { settingsReducer } from "../reducers/settings";
import IDispatch from "../types/dispatch";
import ISettings from "../types/settings";
import ISpeed from "../types/speed";
import ITemperature from "../types/temperature";

type IContext = {
  settings: ISettings,
  dispatch: Dispatch<IDispatch>;
}

const initialState = {
  speed: ISpeed.KILOMETERS,
  temperature: ITemperature.CELSIUS,
};

export const SettingsContext = createContext({} as IContext);

export function SettingsProvider({ children }) {
  const [settings, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContext.Provider value={{ settings, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};
