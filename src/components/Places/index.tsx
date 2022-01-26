import React from "react";
import SunnyIcon from "../../assets/images/forecast-icons/s.svg";

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
  return (
    <Section>
      <Place active={true}>
        <Details>
          <Info>
            <Temp>32c</Temp>
            <Weather active={true}>Cloudy</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>Califórnia</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>28c</Temp>
            <Weather>Lightning</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>Paris</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>24c</Temp>
            <Weather>Storm</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>London</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>33c</Temp>
            <Weather>Bright</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>Milan</Title>
        </Location>
      </Place>
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
          <Title>Califórnia</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>28c</Temp>
            <Weather>Lightning</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>Paris</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>24c</Temp>
            <Weather>Storm</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>London</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>33c</Temp>
            <Weather>Bright</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>Milan</Title>
        </Location>
      </Place>
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
          <Title>Califórnia</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>28c</Temp>
            <Weather>Lightning</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>Paris</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>24c</Temp>
            <Weather>Storm</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>London</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>33c</Temp>
            <Weather>Bright</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>Milan</Title>
        </Location>
      </Place>
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
          <Title>Califórnia</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>28c</Temp>
            <Weather>Lightning</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>Paris</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>24c</Temp>
            <Weather>Storm</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>London</Title>
        </Location>
      </Place>
      <Place>
        <Details>
          <Info>
            <Temp>33c</Temp>
            <Weather>Bright</Weather>
          </Info>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Details>
        <Location>
          <Title>Milan</Title>
        </Location>
      </Place>
    </Section>
  );
};

export default Places;
