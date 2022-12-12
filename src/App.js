import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App({ children }) {
  const setAlertMessageOffline = () => {
    alert('you are offline')
  }
  const setAlertMessageOnline = () => {
    alert('your are online')
    document.location.reload()
  }
  useEffect(() => {
    window.addEventListener('offline', setAlertMessageOffline)
    window.addEventListener('online', setAlertMessageOnline)

    return () => {
      window.removeEventListener('offline', setAlertMessageOffline)
      window.removeEventListener('online', setAlertMessageOnline)
    }
  }, [])

  return (
    <div className="App">
      <ul style={{ width: '100vw' }}>
        <li>
          <Link to="/geolocation">geolocation</Link>
        </li>
        <li>
          <Link to="/offline">offline</Link>
        </li>
        <li>
          <Link to="/camera">camera</Link>
        </li>
        <li>
          <Link to="/reachability">reachability</Link>
        </li>
        <li>
          <Link to="/device-position">device-position</Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  )
}

export default App
