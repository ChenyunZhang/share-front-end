import React, { Component } from 'react'
import Nav from './NavBarLogIn'

export class UserProfile extends Component {
    render() {
        return (
            <>
                <Nav />
                <div className="ui internally celled grid">
                    <div className="row">
                        <div className="four wide column"></div>
                        <div className="eight wide column">
                            <form className="ui form">
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" name="first-name" placeholder="First Name"/>
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input type="text" name="last-name" placeholder="Last Name"/>
                            </div>
                            <button className="ui button" type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="four wide column"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default UserProfile
