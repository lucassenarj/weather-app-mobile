import React, { createContext, Dispatch, useReducer } from "react";
import IDispatch from "../types/dispatch";
import ILocation from "../types/location";
import locationsReducer from "../reducers/locations";
import london from "../utils/london";
import san_francisco from "../utils/san_francisco";

type IContext = {
  locations: ILocation[],
  dispatch: Dispatch<IDispatch>;
}

const initialState = [
  london,
  san_francisco
];

export const LocationsContext = createContext({} as IContext);

export function LocationsProvider({ children }) {
  const [locations, dispatch] = useReducer(locationsReducer, initialState);

  return (
    <LocationsContext.Provider value={{ locations, dispatch }}>
      {children}
    </LocationsContext.Provider>
  );
};
