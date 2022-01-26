import { FontAwesome5 } from "@expo/vector-icons";
import SunnyIcon from "../../assets/images/forecast-icons/s.svg";
import colors from "../../styles/colors";
import {
  Section,
  Info,
  Title,
  Link,
  Forecasts,
  Forecast,
  Date,
  Week,
  Day,
  Temperature,
  Temp,
  Icon
} from "./styles";

function Next() {
  return (
    <Section>
      <Info>
        <Title>Next Forecast</Title>
        <Link>
          <FontAwesome5
            size={24}
            name="calendar-alt"
            color={colors.white}
          />
        </Link>
      </Info>
      <Forecasts>
        <Forecast>
          <Date>
            <Week>Thursday</Week>
            <Day>May, 27</Day>
          </Date>
          <Temperature>
            <Temp>32c</Temp>
          </Temperature>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Forecast>
        <Forecast>
          <Date>
            <Week>Friday</Week>
            <Day>May, 28</Day>
          </Date>
          <Temperature>
            <Temp>32c</Temp>
          </Temperature>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Forecast>
        <Forecast>
          <Date>
            <Week>Saturday</Week>
            <Day>May, 29</Day>
          </Date>
          <Temperature>
            <Temp>32c</Temp>
          </Temperature>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Forecast>
        <Forecast>
          <Date>
            <Week>Sunday</Week>
            <Day>May, 30</Day>
          </Date>
          <Temperature>
            <Temp>32c</Temp>
          </Temperature>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Forecast>
        <Forecast>
          <Date>
            <Week>Monday</Week>
            <Day>May, 31</Day>
          </Date>
          <Temperature>
            <Temp>32c</Temp>
          </Temperature>
          <Icon>
            <SunnyIcon />
          </Icon>
        </Forecast>
      </Forecasts>
    </Section>
  );
};

export default Next;