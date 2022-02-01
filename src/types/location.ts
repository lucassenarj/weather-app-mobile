import IParent from "./parent";
import ISource from "./source";
import IWeather from "./weather";

type ILocation = {
  consolidated_weather: IWeather[];
  woeid: number;
  time: string;
  sun_rise: Date;
  sun_set: Date;
  timezone_name: string;
  parent: IParent;
  sources: ISource[];
  title: string;
  location_type: string;
  latt_long: string;
  timezome: string;
}

export default ILocation;
