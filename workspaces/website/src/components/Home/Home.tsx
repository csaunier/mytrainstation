import { getGeolocation } from "@/api/geolocation"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@ui/Button/Button"

export const Home = () => {
  const { data, status } = useQuery({
    queryKey: ["location"],
    queryFn: () => {
      return getGeolocation({
        lat: "2.333333",
        lng: "48.866667",
      })
    },
  })

  const handleClick = (): void => {
    console.log("Button clicked")
  }

  return (
    <>
      <h2>Here are the 3 closest stations from your current position</h2>
      <div className="text-center bg-custom-test">
        <Button type="button" onClick={handleClick}>
          Get google api url from API
        </Button>
      </div>
      status: {status}
      <br />
      {data && <div>{JSON.stringify(data)}</div>}
    </>
  )
}
