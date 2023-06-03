'use client'

import { WeatherNow } from '@/components/WeatherNow'
import { SearchForm } from '@/components/SearchForm'
import { useState } from 'react'

export default function Home() {
  const [weatherNow, setWeatherNow] = useState({})
  const [weatherCompare, setWeatherCompare] = useState({})
  const [savedWeather, setSavedWeather] = useState(false)

  function handleWeather(weather) {
    if (savedWeather) {
      setWeatherCompare({})
      setWeatherCompare(weather)
    } else {
      setWeatherNow(weather)
    }
  }

  function handleSaved(saved) {
    setSavedWeather(saved)
  }

  function clearData() {
    setWeatherNow({})
    setWeatherCompare({})
    setSavedWeather(false)
  }

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <SearchForm weatherCallback={handleWeather} />
        <div className="flex items-center p-2 pt-10">
          <button
            onClick={clearData}
            className="gap-2 rounded-full bg-orange-400 p-2 px-3 py-1 text-sm leading-none text-black hover:bg-orange-600"
          >
            Limpar Busca
          </button>
        </div>
      </div>
      {savedWeather && !weatherCompare.name && (
        <div className="flex items-center justify-end p-2">
          <button className="gap-2 rounded-full bg-yellow-400 p-2 px-3 py-1 text-sm leading-none text-black hover:bg-yellow-600">
            Comparar Duas Localidades
          </button>
        </div>
      )}
      <div className="grid grid-flow-col pt-4">
        <WeatherNow weather={weatherNow} savedCallback={handleSaved} />

        {weatherCompare && (
          <WeatherNow weather={weatherCompare} savedCallback={handleSaved} />
        )}
      </div>
    </div>
  )
}
