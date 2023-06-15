import React from "react";
import './Savol.css'
import d1 from '../../images/dhb.png'
function Savol() {
    return (
        <div>
            <div className="qorin">
                <div className="j1">
                    <h1>codefinity</h1>
                </div>
                <div className="d1">
                    <img src={d1} alt="" />
                    <h4>1/15</h4>

                </div>
                <div className="j2">
                    <h1>Why are you learning R?</h1>
                </div>
                <div className="btts">
                    <div className="bt1">
                        <button>I need it for school</button>
                    </div>
                    <div className="bt2">
                        <button>I need it for my career</button>
                    </div>
                    <div className="bt3">
                        <button>I need it for my own project</button>
                    </div>
                    <div className="bt4">
                        <button>I want to learn it as a brain exercise</button>
                    </div>
                    <div className="bt5">
                        <button>I just enjoy coding</button>
                    </div>
                    <div className="bt6">
                        <button>Other</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Savol