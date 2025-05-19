import { Elysia } from "elysia"
import logixlysia from 'logixlysia'

export const logger = new Elysia()
    .use(
        logixlysia({
            config: {
                showStartupMessage: true,
                startupMessageFormat: 'banner',
                timestamp: {
                    translateTime: 'yyyy-mm-dd HH:MM:ss'
                },
                ip: true,
                logFilePath: './logs/example.log',
                customLogFormat:
                    '🦊 {now} {level} {duration} {method} {pathname} {status} {message} {ip} {epoch}',
                logFilter: {
                    level: ['ERROR', 'WARNING'],
                    status: [500, 404],
                    method: 'GET'
                }
            }
        })
    )