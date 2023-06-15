import React from 'react'
import './Section.css'
import fanreact from "../../images/fanreact.png"
import qalpoq from "../../images/qalpoq.png"

const Section = () => {
    return (
        <div>
            <div className="contcar1">
                <img className='fanrect' src={fanreact} alt="" />
                <h1 className='watch'>Watch the fan <br /> reaction to <br /> the upcoming <br /> Harry Potter <br /> tv series</h1>
                <p className="lorem556">
                    In our latest episode of Muggle on the Street, we went down to
                    Warner Bros. Studio Tour London to ask the fans for their
                    thoughts on the newly announced Harry Potter TV series. Have
                    a look to see their reactions.
                </p>
                <button className="watchmo5">
                    Watch
                </button>
            </div>

            <div className="contcar2">
                <img className='fanrect2' src={qalpoq} alt="" />
                <div className="textcil">
                    <h1 className='watch2'>Free Hogwarts Legacy items exclusively for Fan Club members</h1>
                    <p className="lorem526">
                        In our latest episode of Muggle on the Street, we went down to
                        Warner Bros. Studio Tour London to ask the fans for their
                        thoughts on the newly announced Harry Potter TV series. Have
                        a look to see their reactions.
                    </p>
                    <button className="watchmo56">
                        Watch
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Section