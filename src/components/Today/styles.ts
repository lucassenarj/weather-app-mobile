import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Section = styled.View`
  width: 100%;
  padding: 20px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 32px;
`;

export const Link = styled.Text`
  font-weight: 300;
  color: ${colors.white};
`;

export const Cards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 8px 0 24px;
  margin-top: 15px;
`;

export const Card = styled.TouchableOpacity`
  width: 170px;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 30px;
  border-radius: 20px;
  padding: 10px 25px;
  background-color: ${props => props.active ? colors.primary : colors.secondary};
`;

export const Icon = styled.View`
  width: 60px;
`;

export const Meta = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
  
export const Span = styled.Text`
  color: ${colors.white};
  font-size: 14px;
`;

export const Value = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: ${colors.white};
`;