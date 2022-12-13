import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import App from '../App'

const Camera = () => {
  const [isScan, setIsScan] = useState(true)
  const [data, setData] = useState()
  const [cameraDirection, setCameraDricetion] = useState('front')

  const onClickCameraDirection = () => {
    cameraDirection === 'front'
      ? setCameraDricetion('rear')
      : setCameraDricetion('front')
  }

  return (
    <App>
      <div style={{ width: '50vw', marginLeft: '100px' }}>
        <button onClick={onClickCameraDirection}>
          change camera direction
        </button>
        {isScan && (
          <QrReader
            facingMode={cameraDirection}
            onResult={(result, error) => {
              if (result && isScan) {
                setData(result?.text)
                setIsScan(false)
              }

              if (!!error) {
                console.info(error)
              }
            }}
          />
        )}
      </div>
      <p>{data}</p>
    </App>
  )
}

export default Camera
