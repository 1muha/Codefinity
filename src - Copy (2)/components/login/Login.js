import React, { useState } from 'react'
import './Login.css'

function Login({ setOpenLogin, openLogin }) {
    const [getEmail, setEmail] = useState("")
    const [getPassword, setPassword] = useState("")


    const formFunction = (e) => {
        e.preventDefault()


        alert(`email:${getEmail}, password: ${getPassword}`)


        setEmail("")
        setPassword("")

        setOpenLogin(false)
    }
    return (
        <div className='login' style={openLogin === true ? { display: "block" } : { display: "none" }}>
            <form action="" onSubmit={formFunction}>
                <label htmlFor="">Email</label>


                <input type="email" placeholder='enter your email' value={getEmail} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="">Password</label>

                <input type="password" onChange={(e) => setPassword(e.target.value)} value={getPassword} placeholder='enter your password' required />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Login;
console.error(salm);