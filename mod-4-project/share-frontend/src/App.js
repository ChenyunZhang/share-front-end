import HomepageImg from "./Components/HomepageImg";
import React from "react";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import NotFound from "./Components/NotFound";
import UserProfile from "./Components/UserProfile";

class App extends React.Component {
  
  state = {
    id: 0,
    username: "",
    email: "",
    token: ""
  }

  handleLoginSubmit = (userInfo) => {
    if(!userInfo.username){
      fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password
      })
    })
    .then(res => res.json())
    .then(response=>{
      console.log(response)
    })
    }
    // else{
    //   fetch("http://localhost:3000/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "Application/json"
    //     },
    //     body: JSON.stringify({
    //       username: userInfo.username,
    //       password: userInfo.password,
    //       email: userInfo.email
    //     })
    //   })
    //   .then(res => res.json())
    //   .then(this.helpHandleResponse)
    // }
  }

  // helpHandleResponse = (resp) => {
  //   if(resp.error){
  //     console.error(resp.error)
  //   } else {
  //     localStorage.token = resp.token
  //     this.setState({
  //       id: resp.user.id,
  //       username: resp.user.username,
  //       snacks: resp.user.snacks,
  //       token: resp.token
  //     })
  //     this.props.history.push("/profile")
  //   }
  // }


  render() {
    return (
      <Switch>
        <Route exact path="/">
            <HomepageImg />
        </Route>
        <Route exact path="/login" >
            <LoginForm
            handleLoginSubmit={this.handleLoginSubmit}
            />
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    );
  }
}

export default App;
