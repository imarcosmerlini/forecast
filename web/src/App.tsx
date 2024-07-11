import { useState } from "react";
import "./App.css";
import { ForecastCard } from "./components/ForecastCard";
import axios from "axios";

function App() {
  const [cep, setCep] = useState("");
  const [forecast, setForecast] = useState(null);

  /**
   * Method to validate the CEP format
   *
   * @param cep
   */
  function onCepChange(cep: string) {
    if (/^[0-9]+$/.test(cep) || cep.length == 0) {
      setCep(cep);
    }
  }

  /**
   * Call the API with the CEP informed and return the name of the city
   *
   * @returns object
   */
  async function getCity() {
    const response = await axios.get(
      `${import.meta.env.VITE_API_SERVER}/city/${cep}`
    );

    return response.data;
  }

  /**
   * Call the API with the city and return the forecast for that
   *
   * @param city
   * @returns object
   */
  async function getForecast(city: string) {
    const forecast = await axios.get(
      `${import.meta.env.VITE_API_SERVER}/weather/${city}`
    );

    return forecast.data;
  }

  async function searchForecast() {
    if (cep.length === 9) {
      console.log("CEP inválido!");
    }

    try {
      const city = await getCity();
      const forecast = await getForecast(city);
      setForecast(forecast);
    } catch (error) {
      throw new Error("Erro ao consultar o clima para a cidade informada!");
    }
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
        {forecast ? (
          // @ts-expect-error pq eu quero
          <ForecastCard {...forecast} />
        ) : ''}
      </div>
    </>
  );
}

export default App;
