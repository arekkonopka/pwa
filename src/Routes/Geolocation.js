import React, { useEffect, useState } from 'react'
import App from '../App'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Geolocation = () => {
  const [places, setPlaces] = useState([])
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLoader(false)
        setLatitude(position?.coords?.latitude)
        setLongitude(position?.coords?.longitude)
      })
    }
  }, [latitude, longitude])

  useEffect(() => {
    if (latitude && longitude) {
      fetch(
        `https://api.geoapify.com/v2/place-details?lat=${
          latitude ?? 49.82
        }&lon=${
          longitude ?? 19.04
        }&features=radius_500,radius_500.restaurant&apiKey=429d5810f63f4f1a8bf4c32b466bde4d`
      )
        .then((response) => response.json())
        .then((result) => {
          setLoader(false)
          setPlaces(result?.features.filter((res) => res.properties.name))
        })
        .catch((error) => console.log('error', error))
    }
  }, [latitude, longitude])

  if (loader) {
    return <App>Loading...</App>
  }
  return (
    <App>
      <MapContainer
        center={[latitude ?? 49.82, longitude ?? 19.04]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map((place, index) => (
          <Marker
            position={
              [
                place?.geometry?.coordinates[1],
                place?.geometry?.coordinates[0],
              ] ?? []
            }
            key={index}
          >
            <Popup>
              <h3>restaurant: {place?.properties?.name ?? 'unknown'}</h3>
              <p>street: {place?.properties?.street ?? 'unknown'}</p>
            </Popup>
          </Marker>
        ))}

        <Marker position={[latitude ?? 49.82, longitude ?? 19.04]}>
          <Popup>Moja lokalizacja</Popup>
        </Marker>
      </MapContainer>
    </App>
  )
}

export default Geolocation
