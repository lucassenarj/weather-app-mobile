import ClearIcon from "../assets/images/forecast-icons/c.svg";
import HailIcon from "../assets/images/forecast-icons/h.svg";
import HeavyCloudIcon from "../assets/images/forecast-icons/hc.svg";
import HeavyRainIcon from "../assets/images/forecast-icons/hr.svg";
import LightCloudIcon from "../assets/images/forecast-icons/lc.svg";
import LightRainIcon from "../assets/images/forecast-icons/lr.svg";
import ShowersIcon from "../assets/images/forecast-icons/s.svg";
import SleetIcon from "../assets/images/forecast-icons/sl.svg";
import SnowIcon from "../assets/images/forecast-icons/sn.svg";
import ThunderstormIcon from "../assets/images/forecast-icons/t.svg";

function useWeatherIcon(icon: string, size: number = 32) {
  switch(icon) {
    case "c": {
      return {
        Icon: <ClearIcon width={size} height={size} />,
        description: "Clear"
      }
    }
    case "h": {
      return {
        Icon: <HailIcon width={size} height={size} />,
        description: "Hail"
      }
    }
    case "hc": {
      return {
        Icon: <HeavyCloudIcon width={size} height={size} />,
        description: "Heavy Cloud"
      }
    }
    case "hr": {
      return {
        description: "Heavy Rain",
        Icon: <HeavyRainIcon width={size} height={size} />
      }
    }
    case "lc": {
      return {
        description: "Light Cloud",
        Icon: <LightCloudIcon width={size} height={size} />
      }
    }
    case "lr": {
      return {
        description: "Light Rain",
        Icon: <LightRainIcon width={size} height={size} />
      }
    }
    case "s": {
      return {
        description: "Showers",
        Icon: <ShowersIcon width={size} height={size} />
      }
    }
    case "sl": {
      return {
        description: "Sleet",
        Icon: <SleetIcon width={size} height={size} />
      }
    }
    case "sn": {
      return {
        description: "Snow",
        Icon: <SnowIcon width={size} height={size} />
      }
    }
    case "t": {
      return {
        description: "Thunderstorm",
        Icon: <ThunderstormIcon width={size} height={size} />
      }
    }
    default: 
      return {
        description: "Showers",
        Icon: <ShowersIcon width={260} height={260} />
      }
  }
};

export default useWeatherIcon;
