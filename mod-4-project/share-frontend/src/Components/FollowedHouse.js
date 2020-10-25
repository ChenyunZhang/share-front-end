import React, { useState } from "react";
import Nav from "./NavBarLogIn";
import FollowedSingleUser from "./FollowedSingleUser";
import FollowedUserDetail from "./FollowedUserDetail"

function FollowedHouse(props) {

  const arrayOfFellowedPeople = props.followed_people.map((followedUser) => (
    <FollowedSingleUser 
    key={followedUser.id} 
    user={followedUser} 
    deleteFollower={props.deleteFollower}
    currentUserName={props.currentUserName}
    relationship={props.relationship}
    renderUser={props.rrenderUser}
    renderInfomation={props.renderInfomation}
    />
  ));
  return (
    <>
      <Nav />
      <div className="ui internally celled grid">
        <div className="row">
          <div className="five wide column">
          <h2>My Follows</h2>
            {arrayOfFellowedPeople}
            </div>
          <div className="eleven wide column">
           {props.renderUser ? <FollowedUserDetail renderUser={props.renderUser} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default FollowedHouse;
