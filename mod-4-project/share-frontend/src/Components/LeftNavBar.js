import React from "react";
import Followers from "./Followers";
import { Link } from "react-router-dom";

function LeftNavBar(props) {
  // console.log(props);
  const arrayOfFollowers = props.userInfo.follower.map((followerObj) => (
    <Followers key={followerObj.id} follower={followerObj} />
  ));

  return (
    <>
      <div className="ui column grid">
        <div className="ui centered card">
          <img
            className="ui image left-bar"
            src={props.userInfo.avatar}
          ></img>
          <div className="content">
            <div className="ui two buttons">
              <Link className="ui labeled button" tabIndex="0" to="/">
                <div className="ui blue button">
                  <i className="heart icon"></i> Post:{" "}
                </div>
                <i className="ui basic blue left pointing label">
                  {
                    props.posts.filter(
                      (postObj) => postObj.user_id === props.userInfo.id
                    ).length
                  }
                </i>
              </Link>

              <Link className="ui labeled button" tabIndex="0" to="/">
                <div className="ui red button">
                  <i className="heart icon"></i> Like:{" "}
                </div>
                <i className="ui basic red left pointing label">
                  {
                    props.likes.filter(
                      (likeObj) => likeObj.user_id === props.userInfo.id
                    ).length
                  }
                </i>
              </Link>
            </div>
          </div>

          <div className="ui list">
            <div className="item">
              <i className="user icon"></i>
              <div className="content">{props.userInfo.username}</div>
            </div>

            <div className="item">
              <i className="marker icon"></i>
              <div className="content">New York, NY</div>
            </div>

            <div className="item">
              <i className="mail icon"></i>
              <div className="content">{props.userInfo.email}</div>
            </div>

            <div className="item">
              <i className="linkify icon"></i>
              <div className="content">
                <div>Share.com</div>
              </div>
            </div>

            <div className="item">
              <i className="users icon"></i>
              <div className="content">
                <Link to="/">Followers: {props.userInfo.follower.length}</Link>
              </div>
            </div>
          </div>
          {arrayOfFollowers}
        </div>
      </div>
    </>
  );
}

export default LeftNavBar;
