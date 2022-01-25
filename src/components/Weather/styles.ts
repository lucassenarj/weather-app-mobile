import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Section = styled.View`
  width: 100%;
  padding: 30px;
  align-items: center;
`;

export const Thumbnail = styled.View`
  margin-bottom: 60px;
`;

export const Details = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Info = styled.View`
  text-align: center;
`;
  
export const Span = styled.Text`
  text-align: center;
  color: ${colors.gray};
  font-weight: 300;
  font-size: 12px;
`;
  
export const Value = styled.Text`
  text-align: center;
  margin-top: 8px;
  color: ${colors.white};
  font-size: 24px;
`;
