import React, { useEffect, useState } from 'react'
import "./LaunchPage.css"
import {FaFacebook, FaInstagram, FaPinterest} from "react-icons/fa"

const LaunchPage = () => {
    // States
    let [days, setDays] = useState('08')
    const [hours, setHours] = useState('23')
    const [minutes, setMinutes] = useState('59')
    const [seconds, setSeconds] = useState('59')

    const dayInterv = () =>{
        let start = 8;
        const end = 0

        if (start === end) return; 

        let timer = setInterval(() => {
          start -= 1;
          setDays(start)
          if (start === end) clearInterval(timer)       
        }, 86400000);
    }

    const hourInterv = () =>{
        let start = 23;
        const end = 0

        if (start === end) return; 

        let timer = setInterval(() => {
          start -= 1;
          setHours(start)
          if (start === end) setInterval(hourInterv())       
        }, 3600000);
    }
    
    const minuteInterv = () =>{
        let start = 59;
        const end = 0

        if (start === end) return; 

        let timer = setInterval(() => {
          start -= 1;
          setMinutes(start)
          if (start === end) setInterval(minuteInterv())       
        }, 60000);
    }

    const secondInterv = () =>{
        let start = 59;
        const end = 0

        if (start === end) return; 

        let timer = setInterval(() => {
          start -= 1;
          setSeconds(start)
          if (start === end) setInterval(secondInterv())       
        }, 1000);
    }
   
    useEffect(() => { 
        secondInterv();
        minuteInterv();   
      }, []);



  return (
    <div className='launch-page'>
        <div className="launch-content">

            <h1 className='launch-title'>We're Launching soon</h1>

            <div className="clock">
                <div className="countdown-box">
                    <div className="box-item">
                        <p>{days}</p>
                    </div>
                    <p>Days</p>
                </div>
                <div className="countdown-box">
                    <div className="box-item">
                        <p>23</p>
                    </div>
                    <p>Hours</p>
                </div>
                <div className="countdown-box">
                    <div className="box-item">
                        <p>{minutes}</p>
                    </div>
                    <p>Minutes</p>
                </div>
                <div className="countdown-box">
                    <div className="box-item">
                        <p>{seconds}</p>
                    </div>
                    <p>Seconds</p>
                </div>
            </div>

            <div className="social-icons">
                <FaFacebook className='socials' />
                <FaPinterest className='socials' />
                <FaInstagram className='socials' />
            </div>
        </div>
        
        <img className='stars-bg' src="images/bg-stars.svg" alt="Stars" />

        <img className='hills-bg' src="images/pattern-hills.svg" alt="Hills" />
    </div>
  )
}

export default LaunchPage