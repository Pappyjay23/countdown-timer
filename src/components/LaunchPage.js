import React from 'react'
import "./LaunchPage.css"

const LaunchPage = () => {
  return (
    <div className='launch-page'>
        <h1>We're Launching soon</h1>

        <div className="clock">
            <div className="countdown-box">
                <div className="box-item">
                    <p>08</p>
                </div>
                <p>DAYS</p>
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
            <img src="images/icon-facebook.svg" alt="Facebook" />
            <img src="images/icon-instagram.svg" alt="Instagram" />
            <img src="images/icon-pinterest.svg" alt="Pinterest" />
        </div>

    </div>
  )
}

export default LaunchPage