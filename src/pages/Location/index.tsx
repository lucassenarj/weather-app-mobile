import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import Places from "../../components/Places";
import Search from "../../components/Search";
import { LocationsContext } from "../../context/LocationsContext";
import { PlaceContext } from "../../context/PlaceContext";
import useAsyncStore from "../../hooks/useAsyncStore";
import { Layout, Main } from "../../styles/globals";

function Location() {
  const { locations } = useContext(LocationsContext);
  const navigation = useNavigation();
  const { place } = useContext(PlaceContext);

  const [location, setLocation] = useState(async () => {
    const { place } = await useAsyncStore();
    if(!place.woeid) {
      navigation.reset({
        index: 0,
        routes: [ { name: "Location" } ]
      });
    }
    return setLocation(place);
  });

  useEffect(() => {
    setLocation(place);
  }, [place]);

  return (
    <Layout>
      <Header title="Pick location" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Main>
          <Search />
          <Places locations={locations} place={location} />
        </Main>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default Location;
