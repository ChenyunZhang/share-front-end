import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBarLogIn extends Component {
    render() {
        return (
           <>
           <nav className="navbar navbar-fixed-top navbar-custom">
            <div className="container-fluid nav-custom-container">
                <ul className="nav navbar-nav">
                    <li><Link to="/" className="navbar-brand home-page-link">Share</Link></li>
                    <li><Link to="/home" className="home-page-link">Home</Link></li>
                    <li className="nav-item btn-group home-page-link">
						<Link className="dropdown-toggle home-page-link" data-toggle="dropdown" id="dropdownMenu1" data-toggle="dropdown" to="/home">Account</Link>
						<div className="dropdown-menu">
							<li><Link className="dropdown-item home-page-link" to="/profile">Edit profile</Link></li>
						</div>
					</li>
                </ul>
                    <form className="navbar-form navbar-left" action="/action_page.php">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <button type="submit" className="btn btn-default">Search</button>
                    </form>
                <ul className="nav navbar-nav navbar-right">
                <li><Link to="/" onClick={this.props.handleLogOut} className="home-page-link"><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
                </ul>
            </div>
            </nav>
            <br />
            <br />
            <br />
           </>
        )
    }
}

export default NavBarLogIn
