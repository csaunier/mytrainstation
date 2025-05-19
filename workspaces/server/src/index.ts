import { Elysia } from "elysia"
import { GeolocationController } from "./api/geolocation/geolocation"
import { cors } from "./plugins/cors"
import { logger } from "./plugins/logger"

const app = new Elysia()
  .use(logger)
  .use(cors)
  .group("/api", (app) => app.use(GeolocationController))

app.listen({ port: process.env.PORT })
