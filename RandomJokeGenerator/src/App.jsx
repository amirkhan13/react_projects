import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes , setJokes] = useState({})
  

  const getaJoke = async()  =>{
    try {

      const res = await fetch("https://official-joke-api.appspot.com/random_joke")
      const data = await res.json()
      setJokes(data)
     
      
      
      
    } catch (error) {
      
    }
  }

    useEffect(() => {
     getaJoke()
    }, [])
    

  return (
    <>
      <div className="joke-container">

          <div className="joke-box">

            {
              !jokes.setup ? (<p>Loading...</p>)
              :
            (
            <>
            <p>{jokes.setup}</p><br />
          <p>{jokes.punchline}</p>
            </>
        )     
            }  
                
          </div>
            <button onClick={getaJoke}>Get a Joke</button>
      </div>
    </>
  )
}

export default App
