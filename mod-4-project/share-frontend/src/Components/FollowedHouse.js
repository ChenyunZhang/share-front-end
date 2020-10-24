import React from "react";
import Nav from "./NavBarLogIn";
import FollowedSingleUser from "./FollowedSingleUser";

function FollowedHouse(props) {
  const arrayOfFellowedPeople = props.followed_people.map((followedUser) => (
    <FollowedSingleUser key={followedUser.id} user={followedUser} />
  ));

  return (
    <>
      <Nav />
      {arrayOfFellowedPeople}
    </>
  );
}

export default FollowedHouse;
