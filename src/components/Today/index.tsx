import { useNavigation } from "@react-navigation/native";
import SunnyIcon from "../../assets/images/forecast-icons/s.svg";
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
  return (
    <Section>
      <Info>
        <Title>Today</Title>
        <Link>May 28, 2021</Link>
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
