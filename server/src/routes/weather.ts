import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import {  z } from 'zod'
import { api } from '../lib/api'

export async function weatherRoutes(app: FastifyInstance) {

  async function handleWeather(weather, api) {
    if (api) {
      const forecast = Object.entries(weather.forecast)[0]
      weather.forecast = forecast[1]
    }

    const data = {
      date: weather.forecast.date,
      name: (weather.location) ? weather.location.name : weather.name,
      temperature: (weather.current) ? weather.current.temperature : weather.temperature,
      feelslike: (weather.current) ? weather.current.feelslike : weather.feelslike,
      sunrise: weather.forecast.astro.sunrise,
      sunset: weather.forecast.astro.sunset,
      maxtemp: weather.forecast.maxtemp,
      mintemp: weather.forecast.mintemp,
      humidity: (weather.current) ? weather.current.humidity : weather.humidity,
      visibility: (weather.current) ? weather.current.visibility : weather.visibility,
      precip: (weather.current) ? weather.current.precip : weather.precip,
      descriptions: (weather.current) ? weather.current.weather_descriptions.toString() : weather.descriptions,
      winddir: (weather.current) ? weather.current.wind_dir : weather.winddir,
      windspeed: (weather.current) ? weather.current.wind_speed : weather.windspeed,
      uvindex: (weather.current) ? weather.current.uv_index : weather.uvindex,
      moonphase: weather.forecast.astro.moon_phase,
      observationtime: (weather.current) ? weather.current.observation_time : weather.observationtime,
      forecast: weather.forecast
    }

    return data
  }

  app.get('/weather', async (request) => {
    const bodySchemaSearch = z.object({
      postalCode: z.string(),
      city: z.string()
    })

    const { postalCode, city } = bodySchemaSearch.parse(request.query)

    await prisma.search.create({
      data: {
        postalCode,
        city
      },
    })

    const weather = await api.get(
      `/forecast?access_key=${process.env.WEATHER_STACK_SECRET}&query=${encodeURI(city)}`
      // `/forecast?access_key=${process.env.WEATHER_STACK_SECRET}&query=${encodeURI(city)}&hourly=1&units=m`
    )

    return await handleWeather(weather.data, true)
  })

  app.post('/weather', async (request) => {
    let weather = await handleWeather(request.body.weather, false)
    delete weather.forecast

    const bodySchema = z.object({
      date: z.string(),
      observationtime: z.string(),
      name: z.string(),
      temperature: z.number(),
      descriptions: z.string(),
      feelslike: z.number(),
      sunrise: z.string(),
      sunset: z.string(),
      maxtemp: z.number(),
      mintemp: z.number(),
      humidity: z.number(),
      visibility: z.number(),
      precip: z.number(),
      winddir: z.string(),
      windspeed: z.number(),
      uvindex: z.number(),
      moonphase: z.string(),
    })

    const validatedWeather = bodySchema.parse(weather)

    await prisma.weather.create({
      data: validatedWeather
    })

    return weather
  })

  app.get('/weather/history', async (request) => {
    const bodySchema = z.object({
      city: z.string(),
      initDate: z.string(),
      endDate: z.string()
    })

    const { city, initDate, endDate } = bodySchema.parse(request.query)

    const weathers = await prisma.weather.findMany({
      where: {
        name: city,
        date: {
          lte: endDate,
          gte: initDate
        },
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return weathers
  })
}