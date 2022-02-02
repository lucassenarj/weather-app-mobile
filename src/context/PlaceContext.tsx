import React, { createContext, Dispatch, useReducer } from "react";
import IDispatch from "../types/dispatch";
import ILocation from "../types/location";
import london from "../utils/london";
import placeReducer from "../reducers/place";
import useAsyncStore from "../hooks/useAsyncStore";

type IContext = {
  place: ILocation,
  dispatch: Dispatch<IDispatch>;
}

export const PlaceContext = createContext({} as IContext);

let initialState = {};

useAsyncStore().then(({ place }) => initialState = place);

export function PlaceProvider({ children }) {
  const [place, dispatch] = useReducer(placeReducer, initialState);

  return (
    <PlaceContext.Provider value={{ place, dispatch }}>
      {children}
    </PlaceContext.Provider>
  );
};
