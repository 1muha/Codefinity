import React from 'react'
import './Section3.css'
import tayoq from "../../images/tayoq.jpg"
import kvidish from "../../images/kvidish.jpg"
import harryron from "../../images/harryron.jpg"
import harryalbus from "../../images/harryalbus.jpg"
import malfoy from "../../images/malfoy.jpg"

function Section3() {
    return (
        <div>
            <div className="cards1">
                <h1 className='lat1'>Latest news </h1>
                <div className="cardlar">
                    <div className="card1">
                        <img className='tayoq' src={tayoq} alt="" />
                        <h2 className='hamag'>Harry Potter:Magic <br /> Awakened is launching <br /> globally this summer</h2>
                    </div>
                    <div className="card2">
                        <img className='kvidish' src={kvidish} alt="" />
                        <h2 className='hamag'>Harry Potter:Magic <br /> Awakened is launching <br /> globally this summer</h2>
                    </div>
                    <div className="card3">
                        <img className='tayoq2' src={tayoq} alt="" />
                        <h2 className='hamag'>Harry Potter:Magic <br /> Awakened is launching <br /> globally this summer</h2>
                    </div>
                </div>
                <div className="line1"></div>
                <p className="viev">VIEW ALL NEWS</p>
            </div>

            <div className="cards2">
                <h1 className='lat2'>Magical Features </h1>
                <div className="cardlar">
                    <div className="card1_2">
                        <img className='tayoq' src={malfoy} alt="" />
                        <h2 className='hamag'>Harry Potter:Magic <br /> Awakened is launching <br /> globally this summer</h2>
                    </div>
                    <div className="card2_2">
                        <img className='kvidish' src={harryron} alt="" />
                        <h2 className='hamag'>Harry Potter:Magic <br /> Awakened is launching <br /> globally this summer</h2>
                    </div>
                    <div className="card3_2">
                        <img className='tayoq2' src={harryalbus} alt="" />
                        <h2 className='hamag'>Harry Potter:Magic <br /> Awakened is launching <br /> globally this summer</h2>
                    </div>
                    <div className="card4_2">
                        <img className='tayoq2' src={tayoq} alt="" />
                        <h2 className='hamag'>Harry Potter:Magic <br /> Awakened is launching <br /> globally this summer</h2>
                    </div>
                </div>
                <div className="line25">________________________________________________________________________________________________________</div>
                <p className="viev2">VIEW ALL NEWS</p>
            </div>

            <div className="footerdivi">
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default Section3