import HomepageImg from "./Components/HomepageImg";
import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import NotFound from "./Components/NotFound";
import UserProfile from "./Components/UserProfile";
import UserHome from "./Components/UserHome";
import Friends from "./Components/Friends";

class App extends React.Component {
  state = {
    id: 0,
    username: "",
    email: "",
    token: "",
    error: "",
    like: 0,
    follower: [],
  };

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/users/keep_logged_in", {
        method: "GET",
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((res) => res.json())
        .then(this.helpHandleResponse);
    }
  }


  handleLoginSubmit = (userInfo) => {
    if (!userInfo.username) {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
        }),
      })
        .then((res) => res.json())
        .then(this.helpHandleResponse);
    } else {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          username: userInfo.username,
          password: userInfo.password,
          email: userInfo.email,
        }),
      })
        .then((res) => res.json())
        .then(this.helpHandleResponse);
    }
  };

  helpHandleResponse = (resp) => {
    if (resp.error) {
      this.setState({
        error: resp.error,
      });
      this.props.history.push("/login");
    } else {
      localStorage.token = resp.token;
      // console.log(resp);
      this.setState({
        id: resp.user.id,
        username: resp.user.username,
        email: resp.user.email,
        like: resp.user.likes,
        follower: resp.user.followers,
        token: resp.token,
        error: "",
      });
      this.props.history.push("/home");
    }
  };

  handleLogOut = () => {
    this.setState({
      id: 0,
      username: "",
      email: "",
      token: "",
    });
    localStorage.clear();
  };

  renderUserHome = () => {
    if (!!this.state.token) {
      return (
        <UserHome
          username={this.state.username}
          id={this.state.id}
          email={this.state.email}
          token={this.state.token}
          like={this.state.like}
          follower={this.state.follower}
          handleLogOut={this.handleLogOut}
        />
      );
    } else {
      return <Redirect to="/" />;
    }
  };

  handleError = () => {
    this.setState({
      error: "",
    });
  };


  render() {
    return (
      <Switch>
        <Route exact path="/">
          <HomepageImg />
        </Route>
        <Route exact path="/home" render={this.renderUserHome} />
        <Route exact path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/friends">
          <Friends />
        </Route>
        <Route exact path="/login">
          <LoginForm
            handleLoginSubmit={this.handleLoginSubmit}
            error={this.state.error}
            handleError={this.handleError}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    );
  }
}

let magic = withRouter(App);
export default magic;
