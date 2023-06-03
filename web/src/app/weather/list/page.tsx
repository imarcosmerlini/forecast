'use client'

import { FormEvent, useEffect, useState } from 'react'
import { WeatherCard } from '@/components/WeatherCard'
import { api } from '@/lib/api'

export default function ListWeather() {
  const [city, setCity] = useState('')
  const [initDate, setInitDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [result, setResult] = useState([])

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('<>Buscou no histórico!<>')

    const response = await api.get('/weather/history', {
      params: {
        city,
        initDate,
        endDate,
      },
    })

    setResult(response.data)
  }

  return (
    <div className="items-center justify-center gap-2 p-2 pt-10">
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center gap-2"
      >
        <div className="flex items-center gap-1.5">
          <label htmlFor="city" className="flex items-center gap-1.5 text-sm">
            Cidade:
            <input
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-6 w-32 rounded border border-gray-400"
            />
          </label>

          <label
            htmlFor="initDate"
            className="flex items-center gap-1.5 text-sm"
          >
            Data Inicial:
            <input
              className="h-6 w-32 rounded px-0 py-0 text-sm"
              type="date"
              id="initDate"
              value={initDate}
              onChange={(e) => setInitDate(e.target.value)}
            />
          </label>

          <label
            htmlFor="endDate"
            className="flex items-center gap-1.5 text-sm"
          >
            Data Final:
            <input
              className="h-6 w-32 rounded px-0 py-0 text-sm"
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>

          <button className="inline-block rounded-full bg-green-500 px-3 py-1 text-sm leading-none text-black hover:bg-green-600">
            Pesquisar
          </button>
        </div>
      </form>
      <div className="pt-10">
        <div className="h-[600px] overflow-y-scroll rounded border border-gray-300">
          {result.map((weather) => {
            return (
              <div
                key={weather.id}
                className="rounded border border-gray-300 bg-sky-100 p-0"
              >
                <div className="p-0">
                  <WeatherCard weather={weather} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
