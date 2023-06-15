import React from "react";
import "./Begin.css"
import colo from "../../images/light-logo.ec97fd20.svg"

function Begin() {
    return (
        <div>
            <div className="boddy">
                <div className="l1">
                    <img className="colo" src={colo} alt="" />
                </div>
                <div className="l2">
                    <img src="https://codefinity.com/_next/static/media/robot.7c5e3b8e.svg" alt="" />
                </div>
                <div className="l3">
                    <h1>Welcome to Codefinity</h1>
                    <h3>Just a few quick questions so we create the learning track for you</h3>
                </div>
                <div className="bts">
                    <button><a href="http://localhost:3000/savol">Continue</a></button>
                </div>
                <div className="qtrm">
                    <p>By continuing I agree with</p>
                    <b>Terms & conditions, Privacy policy, Cookie policy</b>
                </div>
            </div>
        </div>
    )
}
export default Begin;