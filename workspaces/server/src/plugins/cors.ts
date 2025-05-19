import { cors as corsSettings } from "@elysiajs/cors"
import { Elysia } from "elysia"

export const cors = new Elysia().use(
  corsSettings({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 3600,
    credentials: true,
  }),
)
