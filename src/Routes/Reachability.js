import React, { useEffect, useState } from 'react'
import App from '../App'

const Reachability = () => {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const online = () => setIsOnline(true)
    const offline = () => setIsOnline(false)

    window.addEventListener('online', online)
    window.addEventListener('offline', offline)

    return () => {
      window.removeEventListener('online', online)
      window.removeEventListener('offline', offline)
    }
  }, [])

  return (
    <App>
      <h1>Reachability</h1>
      <span>
        you are <b>{isOnline ? 'online' : 'offLine'}</b>
      </span>
    </App>
  )
}

export default Reachability
