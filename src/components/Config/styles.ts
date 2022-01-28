import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Section = styled.View`
  width: 100%;
`;

export const Item = styled.View`
  width: 100%;
  background-color: ${colors.secondary};
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom-color: ${colors.background};
  border-bottom-width: 2px;
`;

export const Name = styled.Text`
  color: ${colors.white};
`;

export const Title = styled.Text`
  color: ${colors.gray};
  font-size: 18px;
  padding: 20px;
`;