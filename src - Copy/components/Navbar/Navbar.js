import React from 'react'
import './Navbar.css'
import imig1 from "../../images/imghar.png"
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import potter from "../../images/potter.webp"

function Navbar() {
    return (
        <div>
            <div className="maindiv">
                <div className="navitems">
                    <img className='imig1' src={imig1} alt="" />
                    <div className="textal">
                        <span className="search"><AiOutlineSearch />SEARCH</span>
                        <button className='login'>LOGIN</button>
                    </div>
                </div>
                <ul className="nav-items">
                    <p className="pi1">NEWS & FEATURES<BsChevronDown /></p>
                    <p className="pi1">QUIZZES & PUZZLES<BsChevronDown /></p>
                    <p className="pi1">J.K ROWLING ARCHEIVE</p>
                    <p className="pi1">DISCOVER<BsChevronDown /></p>
                    <p className="pi1">HOGWARTS SORTING</p>
                    <p className="pi1">FOR KIDS</p>
                    <p className="pi1">LEGACY</p>
                    <p className="pi1">HOGWARTS</p>
                    <p className="pi1">SHOP</p>
                </ul>
                <div className="headerin">
                    <img className='potter' src={potter} alt="" />
                    <div className="texts2">
                        <h1 className='max'>Max: The One to Watch</h1>
                        <p className="lorem1">
                            It's all here! Iconic series, award-winning movies, fresh originals <br /> and family favourites.
                        </p>
                        <button className="more1">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar