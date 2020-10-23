import React, { useState } from "react";
// import Modal  from 'react-bootstrap/Modal'
// import Button  from 'react-bootstrap/Button'

function Comment(props) {
  // console.log(props)
  const handleCommentDelete = () => {
      fetch(`http://localhost:3000/comments/${props.comment.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((deletedCommentObj) => {
          props.deleteComment(deletedCommentObj.id);
        });
    };
  ;

  return (
    <>
    <div className="content">
      <div className="ui comments">
        <div className="comment">
          <div className="ui avatar image">
            <img src={props.comment.user.avatar} />
          </div>
          <div className="content">
            <div className="author">{props.comment.user.username}</div>
            <div className="metadata">
              <span className="date">{props.comment.created_time}</span>
            </div>
            <div className="text">{props.comment.content}</div>
            <div className="actions">
              {props.comment.user_id === props.user.id ? (
                <i
                  className="trash alternate icon"
                  onClick={handleCommentDelete}
                >
                </i>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Comment;
