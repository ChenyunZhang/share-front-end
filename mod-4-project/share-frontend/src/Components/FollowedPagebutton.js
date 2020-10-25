import React, { useState } from "react";

function FollowedPagebutton(props) {
  const [follow, setFollow] = useState(true);

  const handleFollow = () => {
    const relationshipObj = props.relationship.filter(relationshipObj => relationshipObj.followed_id === props.user.id)[0]
    fetch(`http://localhost:3000/relationships/${relationshipObj.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((unfollow) => {
        props.deleteFollower(unfollow);
        setFollow((preState) => !preState);
      });
  };

  return (
    <>
      <div className="right floated meta">
        <div className="ui blue basic label" onClick={handleFollow}>
          {follow ? "unfollow" : "follow"}
        </div>
      </div>
    </>
  );
}

export default FollowedPagebutton;
