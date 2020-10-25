import React, { useState } from "react";

function FollowedUserDetail(props) {
  const [postArr, setPostArr] = useState([]);
  const [likedArr, setLikedArr] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  fetch("http://localhost:3000/users")
    .then((r) => r.json())
    .then((allUsers) => {
      const current = allUsers.filter(
        (userObj) => userObj.id === props.renderUser.user.id
      )[0];

      setPostArr(current.posts);
      setLikedArr(current.likes.post);
      setCurrentUser(current);
      //   console.log(currentUser.likes.map(like => like.post))
    });

  return (
    <>
      <div class="ui cards">
        <div class="ui centered card ">
          <div class="image circular">
            <img className="followed-user-profile-image" src={currentUser.avatar} />
          </div>
        </div>

        <div class="ui card fluid">
          <div class="ui segment">
            <p> <i className="mail icon"></i> {currentUser.email} </p>
            <p> <i className="marker icon"></i>{currentUser.location} </p>
            <p>  <i class="pencil alternate icon"></i>{`${postArr.length} posts`} </p>
          </div>
        </div>
        {/* <div class="content">
            <div class="header">{currentUser.username}</div>
            <div class="meta">
              <a>email</a>
            </div>
            <div class="description">
              {currentUser.email}
            </div>
          </div>
          <div class="extra content">
            <span class="right floated"><i className="marker icon"></i>{currentUser.location}</span>
            <span>
              <i class="user icon"></i>
              {`${postArr.length} posts`}
            </span>
          </div>
        </div> */}
      </div>

      <div className="ui internally celled grid">
        <div className="row">
          <div className="eight wide column">{`${currentUser.username}'s liked posts`}</div>
          <div className="eight wide column">{`${currentUser.username}'s posts`}</div>
        </div>
      </div>
    </>
  );
}

export default FollowedUserDetail;
