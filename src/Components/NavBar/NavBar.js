import React, {useState} from 'react';
import './NavBarStyle.css';
import SearchBar from './SearchBar/SearchBar';
import Logo from './img/logo.png';
import { Link, NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { CgClose } from "react-icons/cg";

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <SearchBar className="top"/>
            <nav>
                <div className="logo">
                <Link to="/home"><img src={Logo} alt="logo" /></Link>
                    
                </div>
                <div className="main">
                <ul className={clicked ? "menu-list" : "menu-list close"}>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/cars">Cars</NavLink></li>
                    <li><NavLink to="/service">Service</NavLink></li>
                    <li><NavLink to="/aboutus">About</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {clicked ? <CgClose /> : <GrMenu />}
                </div>
            </nav>
        </>
    )
}

export default NavBar;