import React, { createContext, Dispatch, useEffect, useReducer, useState } from "react";
import IDispatch from "../types/dispatch";
import ILocation from "../types/location";
import placeReducer from "../reducers/place";
import useAsyncStore from "../hooks/useAsyncStore";
import api from "../services/api";

type IContext = {
  place: ILocation | object,
  dispatch: Dispatch<IDispatch>;
}

export const PlaceContext = createContext({} as IContext);

export function PlaceProvider({ children }) {
  const [location, setLocation] = useState({});

  useEffect(() => {
    (async () => {
      const { place } = await useAsyncStore();
      if (place) {
        const { status, response } = await api.getWeatherInfo(place.woeid);
        if (status) {
          setLocation(response);
        }
      }
    })();
  }, []);

  const [place, dispatch] = useReducer(placeReducer, location);

  useEffect(() => {
    setLocation(place);
  }, [place]);

  return (
    <PlaceContext.Provider value={{ place: location, dispatch }}>
      {children}
    </PlaceContext.Provider>
  );
};
