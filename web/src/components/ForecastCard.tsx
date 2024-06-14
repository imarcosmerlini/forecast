import { BsCloudRain, BsCompass, BsEye, BsWater, BsWind } from "react-icons/bs";

type Forecast = {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: string;
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: Array<string>;
  weather_descriptions: Array<string>;
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day: string;
};

export function ForecastCard(forecast: Forecast) {
  return (
    <div className="forecast-card">
      <h2>
        {forecast.name} - {forecast.region}
      </h2>
      <div>
        <span>Temperatura: {forecast.temperature}°</span>
        <span>Sensação Térmica: {forecast.feelslike}º</span>
      </div>
      <div>
        <span>
          <BsCloudRain /> {forecast.precip} cm
        </span>
        <span>
          <BsWater /> {forecast.humidity}%
        </span>
      </div>
      <div>
        <BsWind />
        <span>{forecast.wind_speed} KM/H</span>
        <BsCompass />
        <span>{forecast.wind_dir}</span>
      </div>
      <div>
        <BsEye />
        <span>{forecast.visibility} KM</span>
      </div>
    </div>
  );
}
