import { useState } from "react";
import "./App.css";
import { ForecastCard } from "./components/ForecastCard";
import axios from "axios";

const mockForecast = {
  name: "Chapecó",
  country: "Brasil",
  region: "Santa Catarina",
  lat: "-27.083",
  lon: "-52.983",
  timezone_id: "America/Sao_Paulo",
  localtime: "2024-06-14 16:52",
  localtime_epoch: 1718383920,
  utc_offset: "-3.0",
  observation_time: "07:52 PM",
  temperature: 27,
  weather_code: 113,
  weather_icons: [
    "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
    "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
  ],
  weather_descriptions: ["Sunny", "Clear"],
  wind_speed: 24,
  wind_degree: 360,
  wind_dir: "N",
  pressure: 1013,
  precip: 0,
  humidity: 51,
  cloudcover: 0,
  feelslike: 28,
  uv_index: 7,
  visibility: 10,
  is_day: "yes",
};

function App() {
  const [cep, setCep] = useState("");
  const [forecast, setForecast] = useState(mockForecast);

  function onCepChange(cep: string) {
    if (/^[0-9]+$/.test(cep) || cep.length == 0) {
      setCep(cep);
    }
  }

  async function searchForecast() {
    // const response = await axios.get(
    //   `${import.meta.env.VITE_API_SERVER}/city/${cep}`
    // );
    // console.log(response);
    // if (cep.length === 9) {
    //   console.log(import.meta.env.API_SERVER);
    // }
  }

  return (
    <>
      <h1>Forecast</h1>
      <div>
        <span>
          <label>CEP</label>
          <input
            type="text"
            placeholder="Informe o CEP"
            value={cep}
            onChange={(e) => onCepChange(e.target.value)}
          />
          <button onClick={searchForecast}>Buscar</button>
        </span>
        <ForecastCard {...forecast} />
      </div>
    </>
  );
}

export default App;
