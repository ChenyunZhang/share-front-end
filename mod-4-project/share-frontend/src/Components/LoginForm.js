import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [active, setActive] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleOverlaySignin = () => {
    setActive({ active: "" });
  };
  const handleOverlaySignup = () => {
    setActive({
      active: "right-panel-active",
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUsername({ [name]: value });
    setPassword({ [name]: value });
    setEmail({ [name]: value });
    console.log(e.target.value);
  };

  const handleSignin = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setPassword({ [name]: value });
    setEmail({ [name]: value });
    console.log(e.target.value);
  };

  return (
    <div className="body">
      <div className={`login-container ${active.active}`} id="login-container">
        <div className="form-container sign-up-container">
          <form onChange={handleSignup}>
            <h1 className="sign-in-font">Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              autoComplete="off"
              name="username"
              value={username.username}
              required
            />

            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              name="email"
              value={email.email}
              required
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password.password}
              required
            />

            <button className="loginform-button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onChange={handleSignin}>
            <h1 className="sign-in-font">Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email.email}
              autoComplete="off"
              required
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              value={password.password}
              required
            />
            <a href="#">Forgot your password?</a>
            <button className="loginform-button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className="login-p">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="loginform-button ghost"
                id="signIn"
                onClick={handleOverlaySignin}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="login-p">
                Enter your personal details and start journey with us
              </p>
              <button
                className="loginform-button ghost"
                id="signUp"
                onClick={handleOverlaySignup}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Link to="/"> Welcome Page</Link>
    </div>
  );
};

export default LoginForm;
