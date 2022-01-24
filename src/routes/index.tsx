import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../styles/colors";
import Forecast from "../pages/Forecast";
import Location from "../pages/Location";
import Report from "../pages/Report";
import Settings from "../pages/Settings";

const { Navigator, Screen } = createBottomTabNavigator();

function Routes(){
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.gray,
          tabBarStyle: {
            height: 100,
            borderTopWidth: 0,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            backgroundColor: colors.background,
          },
          tabBarIconStyle: {
            width: 20,
            height: 20,
            marginTop: 10,
          },
          headerTransparent: true,
          headerTitleStyle: {
            color: colors.white
          }
        }}
      >
        <Screen
          name="Forecast"
          component={Forecast}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <FontAwesome5
                  name="home"
                  size={size}
                  color={ focused ? colors.white : colors.gray }
                />
              );
            }
          }}
        />
        <Screen
          name="Location"
          component={Location}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <FontAwesome5
                  name="search"
                  size={size}
                  color={ focused ? colors.white : colors.gray }
                />
              );
            }
          }}
        />
        <Screen
          name="Report"
          component={Report}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <FontAwesome5
                  name="bullhorn"
                  size={size}
                  color={ focused ? colors.white : colors.gray }
                />
              );
            }
          }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <FontAwesome5
                  name="cog"
                  size={size}
                  color={ focused ? colors.white : colors.gray }
                />
              );
            }
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
};

export default Routes;
