import React, { useState } from "react";

function StatusPostForm(props) {
  // console.log(props.userInfo);
  const [post, setPost] = useState("");
  const [featured_image, setImageUrl] = useState(null);
  // console.log(featured_image)
  const id = props.info.id;

  let handlePostForm = (e) => {
    e.preventDefault();
    if(!featured_image){
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            content: post,
            user_id: id
        })
    })
        .then((r) => r.json())
        .then((newPost) => {
          props.addPost(newPost);
          setPost("");
        });
    }else{
      const formData = new FormData();
      formData.append('content', post);
      formData.append('user_id', id);
      formData.append('featured_image', featured_image);
  
      fetch("http://localhost:3000/posts", {
        method: "POST",
        body: formData
      })
        .then((r) => r.json())
        .then((newPost) => {
          props.addPost(newPost);
          setPost("");
          setImageUrl(null);
        });
    }
  };

  return (
    <form className="ui form" onSubmit={handlePostForm}>
      <div className="field">
        <label>Share</label>
        <textarea
          placeholder="What's in your mind?"
          rows="5"
          name="post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          required
        />
      </div>
      <label htmlFor="upload-photo"><i className="file image outline icon large"></i></label>
      <input 
      type="file" 
      accept="image/*" 
      multiple={false} 
      id="upload-photo"
      onChange={(e) => setImageUrl(e.target.files[0])}
      />
      <button className="ui button" type="submit">
        Post
      </button>
      
    </form>
  );
}

export default StatusPostForm;
