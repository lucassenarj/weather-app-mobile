import React, { createContext, Dispatch, useReducer } from "react";
import IDispatch from "../types/dispatch";
import ILocation from "../types/location";
import london from "../utils/london";
import placeReducer from "../reducers/place";

type IContext = {
  place: ILocation,
  dispatch: Dispatch<IDispatch>;
}

export const PlaceContext = createContext({} as IContext);

export function PlaceProvider({ children }) {
  const [place, dispatch] = useReducer(placeReducer, london);

  return (
    <PlaceContext.Provider value={{ place, dispatch }}>
      {children}
    </PlaceContext.Provider>
  );
};
