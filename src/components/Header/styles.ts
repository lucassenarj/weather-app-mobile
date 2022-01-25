import styled from "styled-components/native";
import colors from "../../styles/colors";

export const View = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 60px auto 0;
`;

export const Title = styled.Text`
  font-weight: 400;
  font-size: 28px;
  color: ${colors.white};
`;

export const Subtitle = styled.Text`
  margin-top: 15px;
  font-weight: 400;
  color: ${colors.gray};
`;