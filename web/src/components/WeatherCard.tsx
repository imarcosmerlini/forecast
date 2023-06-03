import {
  Map,
  Thermometer,
  Wind,
  Eye,
  CloudRain,
  Droplets,
  Sun,
  Sunrise,
  Sunset,
  Moon,
} from 'lucide-react'

export function WeatherCard({ weather }) {
  return (
    <>
      <div className="flex gap-2 p-3 text-sm">
        <label className="flex items-center gap-2">
          <Map className="h-4 w-4" />
          Previsão para{' '}
          {weather.date
            .split('-')
            .reverse()
            .toString()
            .replaceAll(',', '/')}{' '}
          para:
          <p className="text-gray-500">{weather.name}</p>
        </label>

        <label className="flex items-center gap-2">
          <Thermometer className="h-4 w-4" />
          Temperatura:
          <p className="text-gray-500">{weather.temperature}º</p>
        </label>
        <label className="flex items-center gap-2">
          <p>{weather.descriptions.toString()}</p>
        </label>

        <label className="flex items-center gap-2">
          <Thermometer className="h-4 w-4" />
          Sensação térmica:
          <p className="text-gray-500">{weather.feelslike}º</p>
        </label>

        <label className="flex items-center gap-2">
          <Sunrise className="h-4 w-4" />
          <p className="text-gray-500">{weather.sunrise}</p>
        </label>
        <label className="flex items-center gap-2">
          <Sunset className="h-4 w-4" />
          <p className="text-gray-500">{weather.sunset}</p>
        </label>
      </div>

      <div className="grid grid-cols-2">
        <div className="gap-2 p-3 text-sm">
          <div className="justify-start">
            <label className="flex items-center gap-2 border-b-2 border-gray-300 p-1">
              <Thermometer className="h-4 w-4" />
              Max. / Mín.:
              <p className="text-gray-500">
                {weather.maxtemp}/{weather.mintemp}º
              </p>
            </label>
            <label className="flex items-center gap-2 border-b-2 border-gray-300 p-1">
              <Droplets className="h-4 w-4" />
              Humidade:
              <p className="text-gray-500">{weather.humidity}%</p>
            </label>
            <label className="flex items-center gap-2 border-b-2 border-gray-300 p-1">
              <Eye className="h-4 w-4" />
              Visibilidade:
              <p className="text-gray-500">{weather.visibility} km</p>
            </label>
          </div>
        </div>

        <div className="gap-2 p-3 text-sm">
          <label className="flex items-center gap-2 border-b-2 border-gray-300 p-1">
            <CloudRain className="h-4 w-4" />
            Chance de chuva:
            <p className="text-gray-500">{weather.precip}%</p>
          </label>
          <label className="flex items-center gap-2 border-b-2 border-gray-300 p-1">
            <Wind className="h-4 w-4" />
            Vento:
            <p className="text-gray-500">
              {weather.winddir} {weather.windspeed} km/h
            </p>
          </label>
          <label className="flex items-center gap-2 border-b-2 border-gray-300 p-1">
            <Sun className="h-4 w-4" />
            Índice UV:
            <p className="text-gray-500">{weather.uvindex} de 10</p>
          </label>
          <label className="flex items-center gap-2 border-b-2 border-gray-300 p-1">
            <Moon className="h-4 w-4" />
            Fase da lua:
            <p className="text-gray-500">{weather.moonphase}</p>
          </label>
        </div>
      </div>
      {/* 
      {weather.forecast.hourly && (
        <>
          <p className="flex items-center justify-center pb-2 pt-3 text-xl">
            Hora a hora
          </p>
          <div className="flex items-center gap-4 rounded border border-gray-300 p-3 text-sm">
            {weather.forecast.hourly.map((hour) => {
              return (
                <div key={hour.time} className="flex-auto">
                  <div className="flex items-center justify-center gap-2">
                    <div className="items-center justify-center p-2">
                      <p className="flex justify-center border-b-2 border-gray-300">
                        {hour.time}
                      </p>
                      <p className="flex justify-center border-b-2 border-gray-300">
                        {hour.temperature}º
                      </p>
                      <label className="flex items-center justify-center gap-1 border-b-2 border-gray-300 p-1">
                        <CloudRain className="h-4 w-4" />
                        <p>{hour.chanceofrain}%</p>
                      </label>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )} */}
    </>
  )
}
