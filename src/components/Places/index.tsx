import React, { useContext } from "react";
import SunnyIcon from "../../assets/images/forecast-icons/s.svg";
import { LocationsContext } from "../../context/LocationsContext";
import ILocation from "../../types/location";

import {
  Section,
  Place,
  Details,
  Info,
  Temp,
  Weather,
  Icon,
  Location,
  Title,
} from "./styles";

function Places() {
  const { locations } = useContext(LocationsContext);
  return (
    <Section>
      {
        locations.map((place) => (
          <Place>
            <Details>
              <Info>
                <Temp>32c</Temp>
                <Weather>Cloudy</Weather>
              </Info>
              <Icon>
                <SunnyIcon />
              </Icon>
            </Details>
            <Location>
              <Title>{ place.title }</Title>
            </Location>
          </Place>
        ))
      }
    </Section>
  );
};

export default Places;
