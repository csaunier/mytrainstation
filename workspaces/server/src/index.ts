import { Elysia } from "elysia"
import { logger } from "./plugins/logger"
import { cors } from "./plugins/cors"
import { GeolocationController } from "./api/geolocation/geolocation"

const app = new Elysia()
    .use(logger)
    .use(cors)
    .group('/api', (app: Elysia) =>
        app.use(GeolocationController)
    )

app.listen({ port: process.env.PORT })
