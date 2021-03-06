import React, { Dispatch, useContext } from "react";
import { selectPlace } from "../../actions/place";
import { PlaceContext } from "../../context/PlaceContext";
import useTemperature from "../../hooks/useTemperature";
import useWeatherIcon from "../../hooks/useWeatherIcon";
import IDispatch from "../../types/dispatch";
import ILocation from "../../types/location";

import {
  Section,
  Place,
  Details,
  Info,
  Temp,
  Weather,
  Thumbnail,
  Location,
  Title,
  NoPlace,
  Message,
} from "./styles";

type Props = {
  locations: ILocation[];
  place?: ILocation;
  placeDispatch: Dispatch<IDispatch>;
};

function Places({ locations, place, placeDispatch }: Props) {
  function handleSelectPlace(location: ILocation) {
    selectPlace(location, placeDispatch);
  }

  return (
    <Section>
      {
        locations.length >= 1 ? locations.map((location) => {
          const { Icon, description } = useWeatherIcon(location.consolidated_weather[0].weather_state_abbr, 50);
          const isActive = place ? place.woeid === location.woeid : false;
          const temperature = useTemperature(location.consolidated_weather[0].the_temp);
          return (
            <Place
              key={location.woeid}
              active={isActive}
              onPress={() => handleSelectPlace(location)}
            >
              <Details>
                <Info>
                  <Temp>{ temperature }</Temp>
                  <Weather active={isActive}>{ description }</Weather>
                </Info>
                <Thumbnail>
                  { Icon }
                </Thumbnail>
              </Details>
              <Location>
                <Title>{ location.title }</Title>
              </Location>
            </Place>
        )}) : (
          <NoPlace>
            <Message>Find the area or city that you want to know the detailed weather info at this time</Message>
          </NoPlace>
        )
      }
    </Section>
  );
};

export default Places;
