import { getUrl } from "@/api/utils.ts"

const GET_GEOLOCATION_ENDPOINT = "api/geolocation"

type GeolocationParams = {
  lat: string
  lng: string
}
export const getGeolocation = async (params: GeolocationParams) => {
  const url = getUrl(GET_GEOLOCATION_ENDPOINT)
  url.search = new URLSearchParams(params).toString()

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("Network response was not ok")
  }

  const data = await response.json()

  console.log("EEE", data)

  return data
}
