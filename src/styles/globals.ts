import styled from "styled-components/native";
import colors from "./colors";

export const Layout = styled.View`
  flex: 1;
  background-color: ${colors.background};
  color: ${colors.white};
  font-family: 'Trebuchet MS';
  flex-direction: column;
`;

export const Main = styled.ScrollView`
  flex: 1;
`;