import { useState } from 'react'
import './App.css'

function App() {
  const[email ,setEmail] = useState('')
  const[password ,setPassword] = useState('')
  const[error, setError] = useState();
  const[successMsg , setSuccessMsg] = useState();
  

  
  function validateEmail(value){
    if(value.includes("@") && value.includes(".")){
      setError('');
      
    }else{
      setError("Enter valid email")
    }
  }
  function validatePassword(value){
    if(value.length<6){
      setError("password must be atleast 6 characteres long")
    }else{
      setError('')
    }
  }

   function Login(e){
      e.preventDefault();

      if(!email || !password){
        setError("enter a valid email or password")
      }else{
        setSuccessMsg("Logged in Successfully");
       
        setEmail('')
        setPassword('')
      }

  }

  return (
    <>
      <div className='outerdiv'>
        
        <div className="formData">
          <h1>Login</h1>
          <form > 
            <label htmlFor="email">Email:</label>       
            <input type="email"
             placeholder='enter email'
             value={email}
             onChange={(e)=>{
              const value = e.target.value
              setEmail(value);
              validateEmail(value)}}
              
            
            required/>
            <label htmlFor="password">Password:</label>
            <input type="password" 
            placeholder="enter password"
            value={password}
            onChange={(e)=>{
              const value =e.target.value
              setPassword(value);
              validatePassword(value)}}
             required/>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={Login} disabled={error || !email ||!password} >Login</button>
          {successMsg && <p style={{color:'green'}}>{successMsg}</p>}
          </form>
        </div>
      </div>
    </>
  )
}

export default App
