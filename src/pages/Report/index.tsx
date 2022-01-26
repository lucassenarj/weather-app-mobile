import React from "react";
import Header from "../../components/Header";
import Next from "../../components/Next";
import Today from "../../components/Today";
import { Layout, Main } from "../../styles/globals";

function Report() {
  return (
    <Layout>
      <Header title="Forecast Report" />
      <Main>
        <Today />
        <Next />
      </Main>
    </Layout>
  );
};

export default Report;
