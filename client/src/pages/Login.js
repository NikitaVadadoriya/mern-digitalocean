import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Login = () => {
  const Navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (event) => {
    event.preventDefault()
    if(!email =="" && !password == ""){
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
    const data = await response.json()
    if (data.user) {
        localStorage.setItem('token', data.user)
        alert('Login successful')
        Navigate('/dashboard')
    } else {
        alert('Please check your username and password')
    }
  }
  else{
    alert('something are wrong..!!!')
  }
}
  return (
    <div>
      <form onSubmit={loginUser} className='main'>
      <h1>Login</h1>

        <label for="email">Email Id ::</label>
        &nbsp;<input
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className='input'

        />
        <br /><br/>
        <label for="password">password ::</label>
        &nbsp;<input
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className='input'

        />
        <br /><br/>
        <input type="submit" value="Login" className='btn' />
      </form>
    </div>
  )
}

export default Login