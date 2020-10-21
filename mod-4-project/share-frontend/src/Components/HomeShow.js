import React, { useState, useEffect } from "react";
import PostForm from "./StatusPostForm";
import SharedPosts from "./SharedPosts";
import LeftNavBar from "./LeftNavBar";

function HomeShow(props) {
  // console.log(props.userInfo);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((postsArr) => {
        setPost(postsArr);
      });
  }, []);

  let addPost = (newPost) => {
    let copyOfPost = [newPost, ...posts];
    setPost(copyOfPost);
  };

  let deletePost = (deletedPostObj) => {
    let copyOfPosts = posts.filter(postObj => {
      return postObj.id !== deletedPostObj
    })
    setPost(copyOfPosts)
  }

  let arrayofPosts = posts.map((post) => (
    <SharedPosts 
    key={post.id} 
    postObj={post} 
    currentUser={props.userInfo}
    deletePost={deletePost}
    />
  ));

  return (
    <>
      <div className="ui internally celled grid">
        <div className="row">
          <div className="four wide column">
            <LeftNavBar userInfo={props.userInfo} />
          </div>
          <div className="eight wide column">
            <PostForm info={props.userInfo} addPost={addPost} />
            {arrayofPosts}
          </div>

          {/* third part */}
          <div className="four wide column">
            <p>asdasd</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeShow;
