import React from 'react'
import './css/Loader.css'

function Loader () {
  return (
    <div className='loader__back'>
      <div className='loader'>
        <div className='loader__bounce1'></div>
        <div className='loader__bounce2'></div>
        <div className='loader__bounce3'></div>
      </div>
    </div>
  )
}

export default Loader
