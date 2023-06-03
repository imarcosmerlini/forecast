'use client'

import { viaCep } from '@/lib/viaCep'
import { ChangeEvent, useState } from 'react'
import { api } from '@/lib/api'

export function SearchForm({ weatherCallback }) {
  const [city, setCity] = useState<string | ''>('')
  const [postalCode, setPostalCode] = useState<string | ''>('')
  const [weather, setWeather] = useState([])

  function handleWeather(weatherSearch) {
    setWeather(weatherSearch)
    weatherCallback(weather)
  }

  async function searchCep(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    if (!value || value.length < 8) {
      return
    }

    const response = await viaCep.get(`${value.trim()}/json`)
    console.log('<>Buscou o CEP!<>')
    setCity(response.data.localidade)
  }

  async function handleSearchWeather() {
    if (city || postalCode) {
      try {
        console.log(city, postalCode)
        const response = await api.get('/weather', {
          params: {
            city,
            postalCode,
          },
        })

        handleWeather(response.data)
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 p-2 pt-10">
      <div className="flex items-center gap-1.5">
        <label htmlFor="cep" className="flex items-center gap-1.5 text-sm">
          CEP:
          <input
            onBlur={searchCep}
            name="cep"
            id="cep"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="h-6 w-32 rounded border border-gray-400"
          />
        </label>

        <label htmlFor="cep" className="flex items-center gap-1.5 text-sm">
          Cidade:
          <input
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-6 w-32 rounded border border-gray-400"
          />
        </label>
        <button
          onClick={handleSearchWeather}
          className="inline-block rounded-full bg-green-500 px-3 py-1 text-sm leading-none text-black hover:bg-green-600"
        >
          Pesquisar
        </button>
      </div>
    </div>
  )
}
