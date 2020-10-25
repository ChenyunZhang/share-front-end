import React, { useState } from "react";
import Nav from "./NavBarLogIn";

function UserProfile(props) {
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [location, setLocation] = useState(props.location);
  const [gender, setGender] = useState(props.gender);

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
        location,
        gender
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
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field">
              <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="I prefer not to say">I prefer not to say</option>
                <option value="She/her">She/her</option>
                <option value="He/him">He/him</option>
                <option value="They/them">They/them</option>
                </select>
              </div>
             

              <div className="field">
              <label>Location</label>
              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District Of Columbia">District Of Columbia</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennesse">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
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
