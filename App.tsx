import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';
import { PlaceProvider } from "./src/context/PlaceContext";
import { SettingsProvider } from "./src/context/SettingsContext";
import { LocationsProvider } from "./src/context/LocationsContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <PlaceProvider>
          <LocationsProvider>
            <Routes />
            <StatusBar style="light" />
          </LocationsProvider>
        </PlaceProvider>
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
