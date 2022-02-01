import React, { useContext } from "react";
import Header from "../../components/Header";
import Next from "../../components/Next";
import Today from "../../components/Today";
import { PlaceContext, PlaceProvider } from "../../context/PlaceContext";
import { Layout, Main } from "../../styles/globals";

function Report() {
  const { place } = useContext(PlaceContext);
  return (
    <Layout>
      <Header title="Forecast Report" />
      <Main>
        <Today />
        <Next forecasts={place.consolidated_weather} />
      </Main>
    </Layout>
  );
};

export default Report;
