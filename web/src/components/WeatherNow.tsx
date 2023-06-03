'use client'

import { useState } from 'react'
import { WeatherCard } from './WeatherCard'
import { api } from '@/lib/api'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export function WeatherNow({ weather, savedCallback }) {
  const [saved, setSaved] = useState(false)

  function handleSaved(savedWeather) {
    setSaved(savedWeather)
    savedCallback(saved)
  }

  async function saveWeather() {
    await api.post('/weather', { weather })
    handleSaved(true)
  }

  return (
    <>
      {weather.name && (
        <div className="rounded border border-gray-300 bg-sky-100">
          <div className="p-1">
            <WeatherCard weather={weather} />
            <div className="flex items-center justify-end p-2">
              <button
                onClick={saveWeather}
                className="inset-y-0 right-0 inline-block rounded-full bg-green-500 px-3 py-1 text-sm leading-none text-black hover:bg-green-600"
              >
                Gravar Pesquisa
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
