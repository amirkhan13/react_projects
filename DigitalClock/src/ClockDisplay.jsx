import React from 'react'
import './ClockDisplay.css'

function ClockDisplay({hours , minutes , seconds,format ,ampm,toggleFormat}) {
        
  return (
    <div className='clock-container'>
        <div className="clock">
            <div className="hours">{hours <10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div className="minutes">{minutes <10 ?`0${minutes}`:minutes}</div>
            <span>:</span>
            <div className="seconds">{seconds <10 ? `0${seconds} `: seconds}  </div>
            <div className='time-format'>{format ==='12hr' ? ampm :" "}</div>
        </div>
            <div>

            <button className='timeZone' onClick={toggleFormat}> Switch </button>
            </div>
    </div>
  )
}

export default ClockDisplay
