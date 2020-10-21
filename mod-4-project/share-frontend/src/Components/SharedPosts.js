import React from "react";

function SharedPosts(props) {
  const postImage = props.postObj.featured_image
    ? props.postObj.featured_image.url
    : null;

  const handleClick = (e) => {
    // console.log(props.postObj.id);
    fetch(`http://localhost:3000/posts/${props.postObj.id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then((deletedObj) => {
            props.deletePost(deletedObj.id)
        })
  };
  return (
    <>
      <div className="ui centered card fluid">
        <div className="content">
          <div className="right floated meta">{props.postObj.created_time}</div>
          <img className="ui avatar image" src={props.postObj.image} />
          {props.postObj.user.username}
        </div>
        <div className="image card-image">
          <img src={props.postObj.image ? props.postObj.image : postImage} />
        </div>
        <div className="description">{props.postObj.content}</div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            {props.postObj.likes.length} likes
          </span>
          <i className="comment icon"></i>
          {props.postObj.comments.length} comments
        </div>

        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..." />
          </div>
        </div>
        <div className="content">
          {props.postObj.user.id === props.currentUser.id ? (
            <i className="trash alternate outline icon" onClick={handleClick}>
              delete
            </i>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default SharedPosts;
