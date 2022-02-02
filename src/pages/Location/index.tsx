import React, { useContext } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import Places from "../../components/Places";
import Search from "../../components/Search";
import { LocationsContext } from "../../context/LocationsContext";
import { PlaceContext } from "../../context/PlaceContext";
import { Layout, Main } from "../../styles/globals";

function Location() {
  const { locations } = useContext(LocationsContext);
  const { place } = useContext(PlaceContext);
  return (
    <Layout>
      <Header title="Pick location" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Main>
          <Search />
          <Places locations={locations} place={place} />
        </Main>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default Location;
