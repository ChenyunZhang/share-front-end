import React, { useState, useEffect } from "react";
import PostForm from "./StatusPostForm";
import SharedPosts from "./SharedPosts";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";

function HomeShow(props) {
  const [posts, setPost] = useState([]);
  const [likes, setLike] = useState([]);
  const [comments, setComment] = useState([]);

  const url1 = "http://localhost:3000/posts";
  const url2 = "http://localhost:3000/likes";
  const url3 = "http://localhost:3000/comments";

  const promises = Promise.all([fetch(url1), fetch(url2), fetch(url3)]);

  useEffect(() => {
    promises
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((res) => {
        setPost(res[0]);
        setLike(res[1]);
        setComment(res[2])
      });
  }, []);

  // ##############################################################################

  let addPost = (newPost) => {
    let copyOfPost = [newPost, ...posts];
    setPost(copyOfPost);
  };

  let deletePost = (deletedPostObj) => {
    let copyOfPosts = posts.filter((postObj) => {
      return postObj.id !== deletedPostObj;
    });
    setPost(copyOfPosts);
  };

  // ################################################################################
  let addLike = (newLike) => {
    // console.log(likes);
    const newLikeArr = [...likes, newLike];
    setLike(newLikeArr);
  };

  let deleteLike = (deletedLikeObj) => {
    let copyOfLikes = likes.filter((likeObj) => {
      return likeObj.id !== deletedLikeObj.id;
    });
    setLike(copyOfLikes);
  };


  // ###################################################################################
  let addComment = (newComment) => {
    const newCommentArr = [newComment, ...comments];
    setComment(newCommentArr);
  };

  let deleteComment = (deletedCommentObj) => {
    let copyOfComments = comments.filter((commentObj) => {
      return commentObj.id !== deletedCommentObj;
    });
    setComment(copyOfComments);
  };

  // ###################################################################################
  let arrayofPosts = posts.map((post) => (
    <SharedPosts
      key={post.id}
      postObj={post}
      currentUser={props.userInfo}
      deletePost={deletePost}
      addLike={addLike}
      deleteLike={deleteLike}
      addComment={addComment}
      deleteComment={deleteComment}
      comment={comments.filter((comment) => comment.post_id === post.id)}
      like={likes.filter((like) => like.post_id === post.id)}
    />
  ));


  // ##############################################################################

  // #########################################################################
  return (
    <>
      <div className="ui internally celled grid">
        <div className="row">
          <div className="four wide column">
            <LeftNavBar userInfo={props.userInfo} likes={likes} posts={posts} />
          </div>
          <div className="seven wide column">
            <PostForm info={props.userInfo} addPost={addPost} />
            {arrayofPosts}
          </div>

          {/* third part */}
          <div className="five wide column">
            <RightNavBar userInfo={props.userInfo} likes={likes} posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeShow;
