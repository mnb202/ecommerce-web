import React from 'react'
import './style.css'
import avata from '../../assets/images/avata.jpg'

const NotificationComponent = () => {
  return (
    <div className='container-notification'>
            <div className='notification01'>
              <div className='wellcome'>
                <img className='avata' src={avata} alt='' />
                <p className='conten-notification01'>Hi, User let's get started</p>
              </div>
              <button className='bnt-join'>Join now</button>
              <button className='bnt-join'>Log in </button>
            </div>
            <div className='notification02'>
              <p className='conten-notification02'>Get US $10 off with a new supplier</p>
            </div>
            <div className='notification03'>
              <p className='conten-notification02'>Send quotes with supplier preferences</p>
            </div>
          </div>
  )
}

export default NotificationComponent