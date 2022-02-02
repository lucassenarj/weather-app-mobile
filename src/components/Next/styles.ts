import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Section = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  margin-bottom: 80px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 32px;
`;

export const Link = styled.Text`
  font-weight: 300;
  color: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const Forecasts = styled.ScrollView`
  padding: 8px 0 24px;
  margin-top: 15px;
`;

export const Forecast = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 10px 25px;
  margin-top: 20px;
  background-color: ${colors.secondary};
  height: 100px;
`;

export const Date = styled.View`
  width: 140px;
`;

export const Week = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;

export const Day = styled.Text`
  color: ${colors.gray};
  margin-top: 8px;
`;

export const Temperature = styled.View`
  width: 80px;
  margin-right: 30px;
`;

export const Temp = styled.Text`
  font-size: 32px;
  color: ${colors.white};
  text-align: center;
`;

export const Icon = styled.View`
  width: 60px;
`;