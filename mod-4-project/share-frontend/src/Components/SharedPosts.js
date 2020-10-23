import React, { useState } from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

function SharedPosts(props) {
  // console.log(props)
  const handleLike = () => {
    if (props.like.every((l) => l.user_id !== props.currentUser.id)) {
      fetch("http://localhost:3000/likes", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          user_id: props.currentUser.id,
          post_id: props.postObj.id,
        }),
      })
        .then((res) => res.json())
        .then((newLike) => {
          props.addLike(newLike);
        });
    } else {
      const likeObj = props.like.filter(
        (l) => l.user_id === props.currentUser.id
      )[0].id;
      fetch(`http://localhost:3000/likes/${likeObj}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((deleteLike) => {
          props.deleteLike(deleteLike);
        });
    }
  };

  // ########################################################################

  // allow user to post without image.
  const postImage = props.postObj.featured_image
    ? props.postObj.featured_image.url
    : null;

  const handlePostClick = () => {
    fetch(`http://localhost:3000/posts/${props.postObj.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedObj) => {
        props.deletePost(deletedObj.id);
      });
  };
  // ########################################################################

  const [commentState, setCommentState] = useState(false);
  const handleComment = () => {
    setCommentState((preState) => !preState);
  };

  let arrayOfComment = props.comment.map((commentObj) => (
    <Comment
      key={commentObj.id}
      comment={commentObj}
      post={props.postObj}
      user={props.currentUser}
      deleteComment={props.deleteComment}
    />
  ));

  // ########################################################################

  return (
    <>
      <div className="ui centered card post">
        <div className="content">
          <div className="right floated meta">{props.postObj.created_time}</div>
          <img className="ui avatar image" src={props.postObj.user.avatar} />
          {props.postObj.user.username}
        </div>
        <div className="image card-image">
          <img src={props.postObj.image ? props.postObj.image : postImage} />
        </div>
        <div className="content">
          <div className="right floated">
            {props.postObj.user.id === props.currentUser.id ? (
              <i className="trash alternate icon" onClick={handlePostClick}></i>
            ) : null}
          </div>
          <div className="header">{props.postObj.content}</div>
        </div>
        <div className="content">
          <span className="right floated">
            <i
              className={`heart ike icon
            ${
              props.like.some(
                (likeobj) => likeobj.user_id === props.currentUser.id
              )
                ? null
                : "outline"
            }
            `}
              onClick={handleLike}
            ></i>
            {`${props.like.length} ${props.like.length > 1 ? "likes" : "like"}`}
          </span>
          <i className="comment icon" onClick={handleComment}></i>
          {`${props.comment.length} comments`}
        </div>
        {commentState ? (
          <CreateComment
            currentUser={props.currentUser}
            postObj={props.postObj}
            addComment={props.addComment}
          />
        ) : null}
        
        {commentState ? arrayOfComment : null}

      </div>
    </>
  );
}

export default SharedPosts;
