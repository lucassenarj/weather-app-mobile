import styled from "styled-components/native";
import colors from "../../styles/colors";

// export const Section = styled.FlatList.attrs({
//   numColumns: 2,
// })`
//   flex: 1;
//   width: 100%;
//   padding: 20px;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;

export const Section = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Place = styled.TouchableOpacity`
  width: 47%;
  padding: 30px 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  color: ${colors.gray};
  background: ${props => props.active ? colors.primary : colors.secondary};
`;

export const Details = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Info = styled.View``;

export const Temp = styled.Text`
  font-size: 24px;
  margin-bottom: 8px;
  color: ${colors.white};
`;

export const Weather = styled.Text`
  font-size: 14px;
  color: ${props => props.active ? colors.white : colors.gray};
`;

export const Thumbnail = styled.View`
  width: 50px;
  height: 50px;
`;

export const Location = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 20px;
`;

export const NoPlace = styled.View`
  width: 100%;
`;

export const Message = styled.Text`
  color: ${colors.gray};
  font-size: 16px;
`;