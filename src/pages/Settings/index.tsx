import React from "react";
import Config from "../../components/Config";
import Header from "../../components/Header";
import { Layout, Main } from "../../styles/globals";

function Settings() {
  return (
    <Layout>
      <Header title="Settings" />
      <Main>
        <Config />
      </Main>
    </Layout>
  );
};

export default Settings;
