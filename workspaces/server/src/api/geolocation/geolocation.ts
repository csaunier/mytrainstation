import Elysia, { t } from 'elysia';

export const GeolocationController = new Elysia()
    .get('/geolocation', async (handler: Elysia.Handler) => {
        try {
            const { lat, lng } = handler.query

            return {
                url: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
            }
        } catch (e: unknown) {
            handler.set.status = 500;
            return {
                message: 'Unable to retrieve the resource!',
                status: 500,
            };
        }
    }, {
        query: t.Object({
            lat: t.String(),
            lng: t.String()
        })
    })
