import React, { createContext, Dispatch, useEffect, useReducer, useState } from "react";
import IDispatch from "../types/dispatch";
import ILocation from "../types/location";
import locationsReducer from "../reducers/locations";
import useAsyncStore from "../hooks/useAsyncStore";
import api from "../services/api";

type IContext = {
  locations: ILocation[],
  dispatch: Dispatch<IDispatch>;
}

export const LocationsContext = createContext({} as IContext);

export function LocationsProvider({ children }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const { locations } = await useAsyncStore();
      locations.map( async (location) => {
        const { status, response } = await api.getWeatherInfo(location.woeid);
        if (status === 200) {
          setList(prevState => [...prevState, response]);
        };
      });
    })();
  }, []);
  
  const [locations, dispatch] = useReducer(locationsReducer, list);

  useEffect(() => {
    setList(locations);
  }, [locations]);

  return (
    <LocationsContext.Provider value={{ locations: list, dispatch }}>
      {children}
    </LocationsContext.Provider>
  );
};
