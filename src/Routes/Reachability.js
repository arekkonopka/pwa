import React from 'react'
import App from '../App'

const Reachability = () => {
  const isOnLine = window.navigator.onLine
  return (
    <App>
      <h1>Reachability</h1>
      <span>
        you are <b>{isOnLine ? 'online' : 'offLine'}</b>
      </span>
    </App>
  )
}

export default Reachability
