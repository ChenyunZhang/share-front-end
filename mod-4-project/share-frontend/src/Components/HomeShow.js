import React, { useState,useEffect } from "react";
import PostForm from "./StatusPostForm";
import SharedPosts from "./SharedPosts";
import LeftNavBar from "./LeftNavBar";

function HomeShow(props) {
  // console.log(props.userInfo);
  const [posts, setPost] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((postsArr) => {
        setPost(postsArr)
      });
  }, []);

  let arrayofPosts = posts.map(post =>
    <SharedPosts
    key={post.id}
    postObj={post}
    />)

  return (
    <>
      <div className="ui internally celled grid">
        <div className="row">
          <div className="four wide column">
            <LeftNavBar userInfo={props.userInfo} />
          </div>
          <div className="eight wide column">
            <PostForm />
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
