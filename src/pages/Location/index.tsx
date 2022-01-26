import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import Places from "../../components/Places";
import Search from "../../components/Search";
import { Layout, Main } from "../../styles/globals";

const subtitle: string = "Find the area or city that you want to know the detailed weather info at this time";

function Location() {
  return (
    <Layout>
        <Header title="Pick location" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Main>
            <Search />
            <Places />
          </Main>
        </TouchableWithoutFeedback>
      </Layout>
  );
};

export default Location;
