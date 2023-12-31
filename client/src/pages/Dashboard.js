import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode';

const Dashboard = () => {

  const [quote, setQuote] = useState('')
  const [tempQuote, setTempQuote] = useState('')
  const Navigate = useNavigate()

  const populateQuote =async()=> {
    const req = await fetch('/api/quote', {
        headers: {
            'x-access-token': localStorage.getItem('token'),
        },
    })

    const data = await req.json()
    if (data.status === 'add quote...') {
        setQuote(data.quote)
    } else {
        alert(data.error)
    }
}

useEffect(() => {
  const token = localStorage.getItem('token')
  if (token) {
      const user = jwt_decode(token)
      if (!user) {
          localStorage.removeItem('token')
          Navigate('/login')
      } else {
          populateQuote()
      }
  }
}, [])

const updateQuote=async(event) =>{
  event.preventDefault()

  const req = await fetch('/api/quote', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
          quote: tempQuote,
      }),
  })

  const data = await req.json()
  if (data.status === 'ok') {
      setQuote(tempQuote)
      setTempQuote('')
  } else {
      alert(data.error)
  }
}
  return (
    <div className='dash'>
      <h1 style={{color:'white'}}>Your quote: {quote || 'No quote found'}</h1>
      <form onSubmit={updateQuote}>
        <input
          type="text"
          placeholder="Quote"
          value={tempQuote}
          onChange={(e) => setTempQuote(e.target.value)}
          name='quote'
          className='input'
        />
        <input type="submit" value="Update quote"  className='btn1'/>
      </form>
    </div>
  )
}

export default Dashboard