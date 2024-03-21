import React from 'react'
import './style.css'
import Brand from './../../assets/images/Brand.png'
import { BsEmojiAngry ,BsEmojiFrown, BsEmojiExpressionless, BsEmojiSmile, BsEmojiHeartEyes, BsApple, BsGooglePlay  } from "react-icons/bs";

const FooterComponent = () => {
  return (
      <div className='FooterComponent'>
            <div className='Footer01'>
              <img className='Footer01-Brand' src={Brand} />
              <p className='Footer01-Content'>Best information about the company gies here but now lorem ipsum is</p>
              <div className='Footer01-Icon'>
                  <BsEmojiAngry  />
                  <BsEmojiFrown />
                  <BsEmojiExpressionless />
                  <BsEmojiSmile />
                  <BsEmojiHeartEyes />
              </div>
            </div>
            <div className='Footer02'>
              <h6 className='Footer02-Heading'>About</h6>
              <p className='Footer02-Context'>About Us</p>
              <p className='Footer02-Context'>Find Store</p>
              <p className='Footer02-Context'>Category</p>
              <p className='Footer02-Context'>Blogs</p>
            </div>
            <div className='Footer02'>
              <h6 className='Footer02-Heading'>Partnership</h6>
              <p className='Footer02-Context'>About Us</p>
              <p className='Footer02-Context'>Find Store</p>
              <p className='Footer02-Context'>Category</p>
              <p className='Footer02-Context'>Blogs</p>
          </div>
          <div className='Footer02'>
              <h6 className='Footer02-Heading'>Information</h6>
              <p className='Footer02-Context'>Help Center</p>
              <p className='Footer02-Context'>Money Refund</p>
              <p className='Footer02-Context'>Shipping</p>
              <p className='Footer02-Context'>Contact us</p>
          </div>
          <div className='Footer02'>
              <h6 className='Footer02-Heading'>For users</h6>
              <p className='Footer02-Context'>Login</p>
              <p className='Footer02-Context'>Register</p>
              <p className='Footer02-Context'>Settings</p>
              <p className='Footer02-Context'>My Orders</p>
            </div>
          <div className='Footer06'>
              <h6 className='Footer02-Heading'>Get app</h6>
              <div className='Footer06-GetApple'>
                  <div className='Footer06-GetApple-icon'>
                      <BsApple />
                  </div>
                  <div className='Footer06-GetApple-content'>
                      <p className='Footer06-GetApple-content01'>Download on the </p>
                      <p className='Footer06-GetApple-content02'>App Store</p>
                  </div>
              </div>
              <div className='Footer06-GetApple'>
                  <div className='Footer06-GetApple-icon'>
                      <BsGooglePlay  />
                  </div>
                  <div className='Footer06-GetApple-content'>
                      <p className='Footer06-GetApple-content01'>Download on the </p>
                      <p className='Footer06-GetApple-content02'>App Store</p>
                  </div>
              </div>
            </div>
      </div>
  )
}

export default FooterComponent