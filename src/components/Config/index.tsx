import React, { useContext } from "react";
import { selectDistance, selectTemperature } from "../../actions/settings";
import { SettingsContext } from "../../context/SettingsContext";
import { Section, Item, Name, Title } from "./styles";
import RNPickerSelect from "react-native-picker-select";
import colors from "../../styles/colors";
import IDistance from "../../types/distance";
import ITemperature from "../../types/temperature";
import { author, version } from "./../../../package.json";

const DATA = [
  {
    title: "Unities",
    data: ["Distance", "Temperature"]
  }
];

function Config() {
  const { settings, dispatch } = useContext(SettingsContext);
  return (
    <Section>
      <Title>Unities</Title>
      <Item>
        <Name>Distance</Name>
        <RNPickerSelect
          placeholder={{}}
          onValueChange={(value) => selectDistance(value, dispatch)}
          value={settings.distance}
          style={{ inputIOS: { color: colors.white }, inputAndroid: { color: colors.white } }}
          items={[
            { label: IDistance.KILOMETERS, value: IDistance.KILOMETERS },
            { label: IDistance.MILES, value: IDistance.MILES }
          ]}
        />
      </Item>
      <Item>
        <Name>Temperature</Name>
        <RNPickerSelect
          placeholder={{}}
          onValueChange={(value) => selectTemperature(value, dispatch)}
          value={settings.temperature}
          style={{ inputIOS: { color: colors.white }, inputAndroid: { color: colors.white } }}
          items={[
            { label: ITemperature.CELSIUS, value: ITemperature.CELSIUS },
            { label: ITemperature.FAHRENHEIT, value: ITemperature.FAHRENHEIT }
          ]}
        />
      </Item>

      <Title>Notifications</Title>
      <Item>
        <Name>Notification</Name>
        <Name>DISABLED</Name>
      </Item>

      <Title>About</Title>
      <Item>
        <Name>Version</Name>
        <Name>{ version }</Name>
      </Item>
      <Item>
        <Name>Author</Name>
        <Name>{ author }</Name>
      </Item>
    </Section>
  );
};

export default Config;
