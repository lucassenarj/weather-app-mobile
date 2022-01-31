import React, { useContext } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import Places from "../../components/Places";
import Search from "../../components/Search";
import { LocationsProvider } from "../../context/LocationsContext";
import { Layout, Main } from "../../styles/globals";

function Location() {
  return (
    <LocationsProvider>
      <Layout>
        <Header title="Pick location" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Main>
            <Search />
            <Places />
          </Main>
        </TouchableWithoutFeedback>
      </Layout>
    </LocationsProvider>
  );
};

export default Location;
