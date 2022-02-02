import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import SunnyIcon from "../../assets/images/forecast-icons/s.svg";
import { PlaceContext } from "../../context/PlaceContext";
import useFormattedDate from "../../hooks/useFormattedDate";
import {
  Section,
  Info,
  Title,
  Link,
  Cards,
  Card,
  Icon,
  Meta,
  Span,
  Value
} from "./styles";

function Today() {
  const navigator = useNavigation();
  const { place } = useContext(PlaceContext);
  const { fullDay, formatted } = useFormattedDate(place.time);
  return (
    <Section>
      <Info>
        <Title>{ fullDay }</Title>
        <Link>{ formatted }</Link>
      </Info>
      <Cards> 
        <Card active={true}>
          <Icon>
            <SunnyIcon />
          </Icon>
          <Meta>
            <Span>14:00</Span>
            <Value>32c</Value>
          </Meta>
        </Card>
        <Card>
          <Icon>
            <SunnyIcon />
          </Icon>
          <Meta>
            <Span>14:00</Span>
            <Value>32c</Value>
          </Meta>
        </Card>
        <Card>
          <Icon>
            <SunnyIcon />
          </Icon>
          <Meta>
            <Span>14:00</Span>
            <Value>32c</Value>
          </Meta>
        </Card>
      </Cards>
    </Section>
  );
}

export default Today;
