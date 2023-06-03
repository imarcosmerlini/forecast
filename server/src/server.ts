import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { weatherRoutes } from './routes/weather'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(weatherRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })