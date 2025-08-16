import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockDisplay from './ClockDisplay'
import { useEffect } from 'react'

function App() {

    const [currentTime , setCurrentTime] = useState(new Date())
    const [is24hr , setIs24hr] = useState(true)

    useEffect(()=>{
      const timer =setInterval(()=>{
        setCurrentTime(new Date())
      },1000)

      return ()=>clearInterval(timer)
    },[])

    let hours =currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds()
    let ampm='';

    

      if(!is24hr){
        ampm = hours >=12 ?'PM' :"AM";
        hours = hours%12 || 12

        
      
    }

  return (
    <>
    <ClockDisplay 
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      format={is24hr ?"24hr":"12hr"}
      ampm={ampm}
      toggleFormat={()=>setIs24hr(!is24hr)}


    />
    </>
  )
}

export default App
