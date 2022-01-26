import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../styles/colors";
import {
  Section,
  Input,
  Button,
} from "./styles";

function Search() {
  const [value, setValue] = useState(null);
  return (
    <Section>
      <Input
        showSoftInputOnFocus={true}
        placeholder="Pick your location"
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={setValue}
      />
      <Button>
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
