import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Today from "../../components/Today";
import Weather from "../../components/Weather";
import { PlaceContext } from "../../context/PlaceContext";
import useAsyncStore from "../../hooks/useAsyncStore";
import { Layout, Main } from "../../styles/globals";

function Forecast() {
  const navigation = useNavigation();
  const { place } = useContext(PlaceContext);

  const [location, setLocation] = useState(async () => {
    const { place } = await useAsyncStore();
    if(!place.woeid) {
      navigation.reset({
        index: 0,
        routes: [ { name: "Location" } ]
      });
    }
    return setLocation(place);
  });

  useEffect(() => {
    setLocation(place);
  }, [place]);

  return (
    <Layout>
      {
        location.woeid && (
          <>
          <Header title={location.title} />
          <Main>
            <Weather weather={location.consolidated_weather[0]} />
            <Today place={location} />
          </Main>
          </>
        )
      }
    </Layout>
  );
};

export default Forecast;
