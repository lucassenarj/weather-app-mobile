import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import IDistance from "../types/distance";

export default function useDistance(value: number): string {
  const { settings } = useContext(SettingsContext);
  if (settings.distance === IDistance.KILOMETERS) {
    const response = value * 1.60934;
    return `${response.toFixed(0)} km/h`;
  }
  return `${value.toFixed(0)} mph`;
};
