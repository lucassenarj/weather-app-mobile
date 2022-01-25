import React from "react";
import { Image } from "react-native";
import SunnyIcon from "../../assets/images/forecast-icons/s.svg";

import {
  Section,
  Thumbnail,
  Details,
  Info,
  Span,
  Value
} from "./styles";

function Weather() {
  return (
    <Section>
      <Thumbnail>
        <SunnyIcon width={260} height={260} />
      </Thumbnail>
      <Details>
        <Info>
          <Span>Temp</Span>
          <Value>32</Value>
        </Info>
        <Info>
          <Span>Wind</Span>
          <Value>10km/h</Value>
        </Info>
        <Info>
          <Span>Humidity</Span>
          <Value>75%</Value>
        </Info>
      </Details>
    </Section>
  );
};

export default Weather;
