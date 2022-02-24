import React, { useEffect, useState } from 'react'
import "./LaunchPage.css"
import {FaFacebook, FaInstagram, FaPinterest} from "react-icons/fa"

const LaunchPage = () => {
    const [complete, setComplete] = useState(false)
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    function calculateTimeLeft() {  

        // let days = 8;
        // let newDate = new Date(Date.now("00:00:00:00") + days * 24*60*60*1000);
        // const now = new Date()
        // const difference = newDate - now
        // console.log(now)
        // console.log(newDate)

        const year = new Date().getFullYear();
        // const month = new Date().getMonth();
        // const day = new Date().getDay() + 7;
        const difference = +new Date(`3/7/${year}`) - +new Date();
        let timeLeft = {};

        
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
            return timeLeft
        }else{
            setComplete(true)
        }
    }


    useEffect(() => {
        const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
    });



  return (
    <div className='launch-page'>
        <div className="launch-content">
            <h1 className='launch-title'>We're Launching soon</h1>
            {complete ? 
                <h1 className='time-complete'>Time Up!!</h1>
                :
                <div className="clock">
                    <div className="countdown-box">
                        <div className="box-item">
                            <p>{timeLeft.days}</p>
                        </div>
                        <p>Days</p>
                    </div>
                    <div className="countdown-box">
                        <div className="box-item">
                            <p>{timeLeft.hours}</p>
                        </div>
                        <p>Hours</p>
                    </div>
                    <div className="countdown-box">
                        <div className="box-item">
                            <p>{timeLeft.minutes}</p>
                        </div>
                        <p>Minutes</p>
                    </div>
                    <div className="countdown-box">
                        <div className="box-item">
                            <p>{timeLeft.seconds}</p>
                        </div>
                        <p>Seconds</p>
                    </div>
                </div>    
            }

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