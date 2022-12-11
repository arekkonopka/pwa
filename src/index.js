import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Reachability from './Routes/Reachability'
import DevicePostion from './Routes/DevicePostion'
import Geolocation from './Routes/Geolocation'
import Offline from './Routes/Offline'
import Camera from './Routes/Camera'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/geolocation',
    element: <Geolocation />,
  },
  {
    path: '/offline',
    element: <Offline />,
  },
  {
    path: '/camera',
    element: <Camera />,
  },
  {
    path: '/reachability',
    element: <Reachability />,
  },
  {
    path: '/device-position',
    element: <DevicePostion />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
