import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Register = () => {
    const Navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const adduser = async (event) => {
        event.preventDefault()
        if (!userName == "" && !fullName == "" && !email == "" && !password == "") {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName,
                    fullName,
                    email,
                    password,
                }),
            })
                .then((res) => {
                    Navigate('/login')
                })
        }
        else {
            alert('something are wrong')
        }
    }

    return (
        <>
            <div >

                <form onSubmit={adduser} className='main'>
                    <h1>Register</h1>
                    <label for="username">UserName ::</label>
                    &nbsp; <input
                        name='userName'
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        placeholder="Username"
                        className='input'
                    />
                    <br /><br />
                    <label for="fullName">Full Name  ::</label>
                    &nbsp;<input
                        name='fullName'
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        placeholder="Fullname"
                        className='input'
                    />
                    <br /><br />
                    <label for="email">Email Id ::</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;<input
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className='input'
                    />
                    <br /><br />
                    <label for="password">Password ::</label>
                    &nbsp;&nbsp;&nbsp;<input
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className='input'
                    />
                    <br /><br />
                    <input type="submit" value="Register" className='btn' />
                </form>
            </div>
        </>
    )
}

export default Register