import React from "react";
import { View, Text } from "react-native";
import Config from "../../components/Config";
import Header from "../../components/Header";
import { SettingsProvider } from "../../context/SettingsContext";
import { Layout, Main } from "../../styles/globals";

function Settings() {
  return (
    <SettingsProvider>
      <Layout>
        <Header title="Settings" />
        <Main>
          <Config />
        </Main>
      </Layout>
    </SettingsProvider>
  );
};

export default Settings;
