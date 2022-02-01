import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import ITemperature from "../types/temperature";

function useTemperature(value: number): string {
  const { settings } = useContext(SettingsContext);
  if (settings.temperature === ITemperature.FAHRENHEIT) {
    const response = value * 9/5 + 32;
    return `${response.toFixed(0)}°`;
  }
  return `${value.toFixed(0)}°`;
};

export default useTemperature;

