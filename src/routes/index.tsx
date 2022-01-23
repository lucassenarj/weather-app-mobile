import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

function Routes(){
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Forecast"
          component={SafeAreaView}
        />
        <Screen
          name="Location"
          component={SafeAreaView}
        />
        <Screen
          name="Report"
          component={SafeAreaView}
        />
        <Screen
          name="Settings"
          component={SafeAreaView}
        />
      </Navigator>
    </NavigationContainer>
  )
};

export default Routes;
