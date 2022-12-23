import React, { useEffect, useState } from 'react'
import App from '../App'

const DevicePostion = () => {
  const [coords, setCoords] = useState([])

  useEffect(() => {
    const callaback = ({ alpha, beta, gamma }) => {
      setCoords([alpha, beta, gamma])
    }

    window.addEventListener('deviceorientation', callaback, true)

    return () =>
      window.removeEventListener('deviceorientation', callaback, true)
  }, [])

  return (
    <App>
      <h2>position coords</h2>
      <h3>alpha: {coords[0]?.toFixed(2) ?? 0}</h3>
      <h3>beta: {coords[1]?.toFixed(2) ?? 0}</h3>
      <h3>gamma: {coords[2]?.toFixed(2) ?? 0}</h3>
    </App>
  )
}

export default DevicePostion
