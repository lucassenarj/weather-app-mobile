import React from "react";
import useDistance from "../../hooks/useDistance";
import useTemperature from "../../hooks/useTemperature";
import useWeatherIcon from "../../hooks/useWeatherIcon";
import IWeather from "../../types/weather";

import {
  Section,
  Thumbnail,
  Details,
  Info,
  Span,
  Value
} from "./styles";

type Props = {
  weather: IWeather;
}

function Weather({ weather }: Props) {
  const { Icon } = useWeatherIcon(weather.weather_state_abbr, 260);
  return (
    <Section>
      <Thumbnail>
        { Icon }
      </Thumbnail>
      <Details>
        <Info>
          <Span>Temp</Span>
          <Value>{ useTemperature(weather.the_temp) }</Value>
        </Info>
        <Info>
          <Span>Wind</Span>
          <Value>{ useDistance(weather.wind_speed) }</Value>
        </Info>
        <Info>
          <Span>Humidity</Span>
          <Value>{ weather.humidity }%</Value>
        </Info>
      </Details>
    </Section>
  );
};

export default Weather;
