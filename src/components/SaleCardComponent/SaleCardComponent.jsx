import React from 'react'
import './style.css'
import applewatch from '../../assets/images/applewatch.jpg'
const SaleCardComponent = () => {
  return (
    <div className='container-sale'>
      <img className='sale-img' src={applewatch} />
      <h7 className='img-content'>Smart watch</h7>
      <div className='sale-tag'>
        <h6 className='sale-tag-content'>-25%</h6>
      </div>
    </div>
  )
}

export default SaleCardComponent