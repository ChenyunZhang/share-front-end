import React, { useState } from "react";


let handlePostForm = () =>{

}

let handleChange = () =>{

}

function StatusPostForm(props) {
  console.log(props.userInfo);
  const {post, setPost} = useState('')
  return (
    <div className="ui form" onSubmit={handlePostForm}>
      <div className="field">
        <label>Share</label>
        <textarea
          placeholder="What's in your mind?"
          rows="5"
          name="post"
          value={post}
          onChange={handleChange}
        />
      </div>
      <button className="ui button" type="submit">
        Post
      </button>
    </div>
  );
}

export default StatusPostForm;
