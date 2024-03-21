import React, { useEffect, useRef, useState } from 'react'
import './style.css'
const CountdownComponent = () => {
    const [timeDays, setTimeDays] = useState('00');
    const [timeHours, setTimeHours] = useState('00');
    const [timeMinutes, setTimeMinutes] = useState('00');
    const [timeSeconds, setTimeSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('June 30, 2024 00:00:00').getTime();
        
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 *60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60 ) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60) / (1000)));

            if (distance < 0) {
                //stop out timer
                clearInterval(interval.current);
            } else {
                //update timer
                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds);
            }

        }, 1000)
    };

    //componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    })


  return (
    <div className='container-countdowntime'>
        <h4 className='countdowntime-content-h4'>Deals and offers</h4>
        <p className='countdowntime-content-p'>Hygiene eqiupments</p>
        <div className='time'>
            <div className='time-box'>
                  <div className='value'>
                      <span>{timeDays}</span>
                  </div>  
                  <span className='lable'> Days</span>
              </div> 
              <div className='time-box'>
                  <div className='value'>
                      <span>{ timeHours}</span>
                  </div>  
                  <span className='lable'> Hour</span>
              </div>  
              <div className='time-box'>
                  <div className='value'>
                      <span>{ timeMinutes}</span>
                  </div>  
                  <span className='lable'> Min</span>
              </div> 
              <div className='time-box'>
                  <div className='value'>
                      <span>{timeSeconds}</span>
                  </div>  
                  <span className='lable'> Sec</span>
            </div>   
        </div>
    </div>
  )
}

export default CountdownComponent