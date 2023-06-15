import React from 'react'
import './Main.css'
import logo1 from "../../images/light-logo.ec97fd20.svg"
import img1 from "../../images/photo_2023-06-09_16-06-45.jpg"
import img2 from "../../images/photo_2023-06-09_16-06-48.jpg"
import img3 from "../../images/photo_2023-06-09_16-06-50.jpg"
import img4 from "../../images/burger.4097c23c.svg"

function Main() {



    return (
        <div>
            <img className='logo1' src={logo1} alt="" />
            <h1 className='boost'>BOOST YOUR CAREER</h1>
            <p className="get">
                Get personalized learning track and start improving your technology skills
            </p>
            <h1 className='how'>How familiar are you with coding?</h1>
            <div className="alld">
                <img src={img4} alt="" className="img4" />
                <div className="container">
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cooky Policy</li>
                        <li>Subscription terms</li>
                        <li>Online Dispute Resolution</li>
                    </ul>
                </div>
            </div>

            <div className="cards">
                <div className="card1">
                    <a href="http://localhost:3000/begin">
                        <p>Beginner</p>
                    </a>
                    <img src={img1} alt="" />
                </div>
                <div className="card2">
                    <a href="http://localhost:3000/begin">
                        <p>Intermediate</p>
                    </a>
                    <img src={img2} alt="" />
                </div>
                <div className="card3">
                    <a href="http://localhost:3000/begin">
                        <p>Advanced</p>
                    </a>
                    <img src={img3} alt="" />
                </div>
            </div>
            <footer>
                <ul className='ul1'>
                    <li>By continuing I agree with <span>Terms & conditions, Privacy policy, Cookie policy</span></li>
                </ul>
            </footer>
        </div>
    )
}

export default Main