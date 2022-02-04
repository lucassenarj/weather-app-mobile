import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Next from "../../components/Next";
import Today from "../../components/Today";
import { PlaceContext } from "../../context/PlaceContext";
import useAsyncStore from "../../hooks/useAsyncStore";
import { Layout, Main } from "../../styles/globals";

function Report() {
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
      <Header title="Forecast Report" />
      {
        location.woeid ? (
          <Main>
            <Today place={location} />
            <Next forecasts={location.consolidated_weather} />
          </Main>
        ) : (<></>)
      }
    </Layout>
  )
};

export default Report;
