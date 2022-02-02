import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Today from "../../components/Today";
import Weather from "../../components/Weather";
import { PlaceContext } from "../../context/PlaceContext";
import { Layout, Main } from "../../styles/globals";

function Forecast() {
  const { place } = useContext(PlaceContext);
  const navigation = useNavigation();

  if (!place.woeid) {
    navigation.reset({
      index: 0,
      routes: [ { name: "Location" } ]
    });
  }

  return place.woeid ? (
    <Layout>
      <Header title={place.title} />
      <Main>
        <Weather weather={place.consolidated_weather[0]} />
        <Today />
      </Main>
    </Layout>
  ) : null;
};

export default Forecast;
