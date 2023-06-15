import React from 'react'
import './Section2.css'
import maktub from "../../images/maktub.png"
import sharbat from "../../images/sharbat.png"


function Section2() {
    return (
        <div>
            <div className="contcar45">
                <img className='fanrect22' src={maktub} alt="" />
                <div className="textcil1">
                    <h1 className='watch22'>Be the first to hear exclusive TV series news</h1>
                    <p className="lorem527">
                        Sign up to our email newsletter to keep up with the latest about the upcoming Max series
                    </p>
                    <button className="watchmo57">
                        Sign up
                    </button>
                </div>
            </div>
            <div className="contcar488">
                <img className='sharbat' src={sharbat} alt="" />
                <div className="textcil18">
                    <h1 className='watch22'>Be the first to hear exclusive TV series news</h1>
                    <p className="lorem528">
                        Sign up to our email newsletter to keep up with the latest about the upcoming Max series
                    </p>
                    <button className="watchmo57">
                        SHOP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section2