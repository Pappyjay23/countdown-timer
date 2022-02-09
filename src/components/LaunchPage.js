import React, { useState } from 'react'
import "./LaunchPage.css"
import {FaFacebook, FaInstagram, FaPinterest} from "react-icons/fa"

const LaunchPage = () => {
    // States
    let [days, setDays] = useState('08')
    const [hours, setHours] = useState('23')
    const [minutes, setMinutes] = useState('55')
    const [seconds, setSeconds] = useState('41')

    // let dayInterv = setInterval(() =>{
    //     let Day = parseInt(days)
    //     let newDay = Day - 1
    //     setDays(newDay)
    //     if(days = 0){
    //         clearInterval(dayInterv)
    //     }
    // }, 200)



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
                        <p>55</p>
                    </div>
                    <p>Minutes</p>
                </div>
                <div className="countdown-box">
                    <div className="box-item">
                        <p>41</p>
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