import React, { useEffect, useState } from 'react'
import App from '../App'

const DevicePostion = () => {
  const [coords, setCoords] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setCoords(coords)
        setIsLoading(false)
      })
    }
  }, [coords?.speed])

  if (isLoading) {
    return <App>Loading....</App>
  }
  return (
    <App>
      <h4>
        If no value returned, it means that your device doesn't handle this
        functionality
      </h4>
      <p>
        <b>latitude</b>: Returns the position's latitude in decimal degrees:{' '}
        <b>{coords?.latitude}</b>
      </p>
      <p>
        <b>longitude:</b> Returns the position's longitude in decimal degrees:{' '}
        <b>{coords?.longitude}</b>
      </p>
      <p>
        <b>altitude:</b> Returns the position's altitude in meters, relative to
        sea level: <b>{coords?.altitude}</b>
      </p>
      <p>
        <b> accuracy:</b>Returns the accuracy of the latitude and longitude
        properties in meters: <b>{coords?.accuracy}</b>
      </p>
      <p>
        <b> altitudeAccuracy:</b>Returns the accuracy of the altitude property
        in meters: <b>{coords?.altitudeAccuracy}</b>
      </p>
      <p>
        <b> heading:</b> Returns the direction in which the device is traveling.
        This value, specified in degrees, indicates how far off from heading
        true north the device is. 0 degrees represents true north, and the
        direction is determined clockwise (east is 90 degrees and west is 270
        degrees). If speed is 0, heading is NaN. If the device is unable to
        provide heading information, this value is null:{' '}
        <b>{coords?.heading}</b>
      </p>
      <p>
        <b> speed:</b>Returns the velocity of the device in meters per second.
        This value can be null <b>{coords?.speed}</b>
      </p>
    </App>
  )
}

export default DevicePostion
