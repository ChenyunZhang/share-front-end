import React, { useState } from "react";
import Nav from "./NavBarLogIn";

function UserProfile(props) {
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/${props.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        username,
        email,
      }),
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        props.handleUserUpdate(updatedUser);
      });
  };

  return (
    <>
      <Nav />
      <div className="ui internally celled grid">
        <div className="row">
          <div className="four wide column"></div>
          <div className="eight wide column">
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="login-error"></div>
              <div className="field">
                <label>username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  autoComplete="off"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="field">
                <label>email</label>
                <input
                  type="text"
                  name="email"
                  autoComplete="off"
                  placeholder="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button className="ui button" type="submit">
                Update
              </button>
            </form>
          </div>
          <div className="four wide column"></div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
