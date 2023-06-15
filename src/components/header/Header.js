import React from 'react'
import './Header.css'
import img1 from "../../images/light-logo.ec97fd20.svg"
import img2 from "../../images/img2.webp"
import { IoIosPeople } from 'react-icons/io'
import { AiOutlineCheck } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'



function Header() {
    return (
        <div>
            <nav>
                <img className='img1' src={img1} alt="" />
                <ul className='ul1'>
                    <li>Pricing</li>
                    <li>Catalog</li>
                    <li><IoIosPeople /> For Teams</li>
                </ul>
                <ul className="ul2">
                    <li className='login'>Login</li>
                    <li><button>Sign Up</button></li>
                </ul>
            </nav>
            <div className="header">
                <h1 className='level'>LEVEL UP YOUR CODING SKILLS!</h1>
                <ul className="plar">
                    <li>
                        <AiOutlineCheck className='ptich' /> Learn from anywhere! No installation required
                    </li>
                    <li>
                        <AiOutlineCheck className='ptich' /> Follow our guidance. Use step by step instructions
                    </li>
                    <li>
                        <AiOutlineCheck className='ptich' /> Choose from 30+ top rated courses
                    </li>
                    <li>
                        <AiOutlineCheck className='ptich' /> Join community of 50K+ learners
                    </li>
                </ul>
                <div className="btns">
                    <button className="google"><FcGoogle /> Continue with Google</button>
                    <button className="facebok"><BsFacebook /> Continue with Facebook</button>
                </div>
                <img src={img2} alt="" className="img2" />
            </div>
        </div>
    )
}

export default Header