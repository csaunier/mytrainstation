export const baseUrl: string = "http://localhost:3001"

export const getUrl = (url: string): URL => {
  return new URL(`${baseUrl}/${url}`)
}