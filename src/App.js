import { Link } from 'react-router-dom'
import './App.css'

function App({ children }) {
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
