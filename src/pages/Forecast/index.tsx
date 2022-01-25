import React from "react";
import Header from "../../components/Header";
import Today from "../../components/Today";
import Weather from "../../components/Weather";
import { Layout, Main } from "../../styles/globals";

function Forecast() {
  return (
    <Layout>
      <Header title="San Francisco" />
      <Main>
        <Weather />
        <Today />
      </Main>
    </Layout>
  );
};

export default Forecast;
