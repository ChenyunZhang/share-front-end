import React from 'react'
import { Route, Switch, Link, NavLink }  from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar custom-color">
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login" className="navBar-login-Text">LOGIN/SIGNUP</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
