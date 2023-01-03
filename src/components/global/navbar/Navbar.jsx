import React from "react";

import './Navbar.css'

const Navbar = () => {
    return (
        <section className='navbar'>
            <a href="/" className="navbar-item">Home</a>
            <a href="/contact" className="navbar-item">Contact</a>
            <a href="/users" className="navbar-item">Users</a>
        </section>
    )
}

export default Navbar;