import React from "react";
import IHeader from "../../types/header";
import { View, Title } from "./styles";

function Header({ title }: IHeader) {
  return (
    <View>
      <Title>{ title }</Title>
    </View>
  );
};

export default Header;
