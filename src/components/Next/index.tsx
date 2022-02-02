import { FontAwesome5 } from "@expo/vector-icons";
import SunnyIcon from "../../assets/images/forecast-icons/s.svg";
import useFormattedDate from "../../hooks/useFormattedDate";
import useTemperature from "../../hooks/useTemperature";
import useWeatherIcon from "../../hooks/useWeatherIcon";
import colors from "../../styles/colors";
import IWeather from "../../types/weather";
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

type Props = {
  forecasts: IWeather[];
}

function Next({ forecasts }: Props) {
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
        {
          forecasts && forecasts.map((forecast) => {
            const { fullDay, formatted } = useFormattedDate(forecast.applicable_date);
            const { Icon: Thumbnail } = useWeatherIcon(forecast.weather_state_abbr, 60);
            return (
              <Forecast key={forecast.id}>
                <Date>
                  <Week>{ fullDay }</Week>
                  <Day>{ formatted }</Day>
                </Date>
                <Temperature>
                  <Temp>{ useTemperature(forecast.the_temp) }</Temp>
                </Temperature>
                <Icon>
                  { Thumbnail }
                </Icon>
              </Forecast>
            )
          })
        }
      </Forecasts>
    </Section>
  );
};

export default Next;