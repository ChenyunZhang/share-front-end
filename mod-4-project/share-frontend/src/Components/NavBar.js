import React from 'react'
import { Route, Switch, Link, NavLink }  from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar custom-color">
            <div class="container-fluid">
                <ul class="nav navbar-nav navbar-right">
                <li><Link to="/login" className="navBar-login-Text">LOGIN/SIGNUP</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
