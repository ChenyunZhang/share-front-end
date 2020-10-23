import React, { Component } from "react";
// import { Link }  from "react-router-dom";
import Nav from "./NavBarLogIn";
import Home from "./HomeShow";

export class UserHome extends Component {

  render() {
    return (
      <>
        <Nav 
        handleLogOut={this.props.handleLogOut} 
        />
        <Home
        userInfo={this.props}
        />
      </>
    );
  }
}

export default UserHome;
