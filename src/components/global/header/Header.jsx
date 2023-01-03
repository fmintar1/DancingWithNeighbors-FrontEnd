import React from "react";
import Navbar from "../navbar";

import './Header.css'

const Header = () => {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top_logo">
                    <a href='/' className='header-logo'>Dancing With Friends</a>
                </section>
                <section className='header-top_navbar'>
                    <section className='header-top_navigation'>
                        <Navbar />
                    </section>
                </section>
            </section>
            <hr className='header-top_seperator'/>
        </section>
    )
}

export default Header;