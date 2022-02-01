import React, { useContext } from "react";
import Header from "../../components/Header";
import Today from "../../components/Today";
import Weather from "../../components/Weather";
import { PlaceContext } from "../../context/PlaceContext";
import { Layout, Main } from "../../styles/globals";

function Forecast() {
  const { place } = useContext(PlaceContext);
  return (
    <Layout>
      <Header title={place.title} />
      <Main>
        <Weather weather={place.consolidated_weather[0]} />
        <Today />
      </Main>
    </Layout>
  );
};

export default Forecast;
