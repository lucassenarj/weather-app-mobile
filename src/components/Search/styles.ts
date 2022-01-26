import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Section = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-right: 10px;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${colors.secondary};
  color: ${colors.gray};
  height: 50px;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${colors.secondary};
  color: ${colors.gray};
  border: none;
  justify-content: center;
  align-items: center;
`;