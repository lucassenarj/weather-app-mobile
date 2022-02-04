import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Location from 'expo-location';
import colors from "../../styles/colors";
import {
  Section,
  Input,
  Button,
} from "./styles";
import api from "../../services/api";

function Search() {
  const [value, setValue] = useState(null);
  const [locations, setLocations] = useState([]);

  async function handleSelectLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
    const { status: apiStatus, response } = await api.searchWeatherByLatLong(latitude, longitude);
    if (apiStatus === 200) {
      setLocations(response);
    }
  };

  return (
    <Section>
      <Input
        showSoftInputOnFocus={true}
        placeholder="Pick your location"
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={setValue}
      />
      <Button onPress={handleSelectLocation}>
        <FontAwesome5
          size={30}
          name="map-marker-alt"
          color={colors.gray}
        />
      </Button>
    </Section>
  );
};

export default Search;
