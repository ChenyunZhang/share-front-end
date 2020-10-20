import React from "react";

function LeftNavBar(props) {
  return (
    <>
    <h1>Hi: {props.userInfo.username}</h1>
      <h1>like: {props.userInfo.like.length}</h1>
      <h1>follower：{props.userInfo.follower.length}</h1>
      {/* {console.log(props.userInfo.follower)} */}
      {/* <div class="ui middle aligned selection list">
        <div class="item">
            <img class="ui avatar image" src="https://images.unsplash.com/photo-1603113693773-d86f7db2c682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <div class="content">
            <div class="header">Helen</div>
            </div>
        </div>
        <div class="item">
            <img class="ui avatar image" src="https://images.unsplash.com/photo-1601758124277-f0086d5ab050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <div class="content">
            <div class="header">Daniel</div>
            </div>
        </div>
        </div> */}
    </>
  );
}

export default LeftNavBar;
