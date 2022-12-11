import React, { useEffect, useState } from 'react'
import App from '../App'
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet'

const Geolocation = () => {
  const [latitude, setLatitude] = useState(undefined)
  const [longitude, setLongitude] = useState(19.5)
  const [loader, setLoader] = useState(true)

  const fillBlueOptions = { fillColor: 'blue' }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLoader(false)
        setLatitude(position?.coords?.latitude)
        setLongitude(position?.coords?.longitude)
      })
    }
  }, [latitude, longitude])

  if (loader) {
    return <App>Loading...</App>
  }
  return (
    <App>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={[49.9778, 18.94232]}
          pathOptions={fillBlueOptions}
          radius={200}
        >
          Pszczyński rynek
        </Circle>
        {/* <Marker position={[49.9778, 18.94232]}>
          <Popup>Pszczynski rynek</Popup>
        </Marker> */}
        <Marker position={[latitude, longitude]}>
          <Popup>Moja lokalizacja</Popup>
        </Marker>
      </MapContainer>
    </App>
  )
}

export default Geolocation
