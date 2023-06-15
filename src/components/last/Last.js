import React from 'react'
import './Last.css'
import log from "../../images/light-logo.ec97fd20.svg"
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'

function Last() {
    return (
        <div>
            <h1 className="getst">Get started for free!</h1>
            <div className="btns24">
                <button className="goog"> <FcGoogle />Continue with Google</button>
                <button className="face"><BsFacebook /> Continue with Facebook</button>
                <li className='orsign'>or sign up with email</li>
                <button className="starf">Start for free</button>
            </div>
            <footer>
                <img src={log} alt="" />
                <ul className="ulk1">
                    <h2>Technologies</h2>
                    <li>Phyton</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                </ul>
                <ul className="ulk2">
                    <h2>Technologies</h2>
                    <li>Phyton</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                </ul>
                <ul className="ulk3">
                    <h2>Technologies</h2>
                    <li>Phyton</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                </ul>
            </footer>
            <div className="footer2">
                <li>info@codefinity.com</li>
                <li>info@codefinity.com</li>
                <li>info@codefinity.com</li>
                <li>info@codefinity.com</li>
                <li>info@codefinity.com</li>
                <li>info@codefinity.com</li>
                <li>info@codefinity.com</li>
            </div>
        </div>
    )
}

export default Last