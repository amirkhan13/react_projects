import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setErros] = useState({});



  const validate = () => {
    const newErros = {};
    if (!email.includes("@")) {
      newErros.email = "Invalid email"
    }
    if (password.length < 6) {
      newErros.password = "passowrd is too short"
    }
    setErros(newErros)

    return Object.keys(newErros).length == 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("From submitted", { email, password });

    }
  }


  return (
    <>
      <div className="form">

        <form onSubmit={handleSubmit}>
          <input type="email"
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />


          <button type='submit'>submit</button>
        </form>
        {error.email && <p style={{ color: "Red" }}>{error.email}</p>}
        {error.password && <p style={{ color: "Red" }}>{error.password}</p>}
      </div>
    </>
  )
}

export default App
