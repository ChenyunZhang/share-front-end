import React from 'react'

function Followers(props) {
    // console.log(props)
    return (
        <>
        <div className="ui celled list">
        <div className="item">
          <img className="ui avatar image" src={props.follower.avatar} />
          <div className="content">
            <div className="header">{props.follower.username}</div>
            {props.follower.email}
          </div>
        </div>
      </div>
        </>
    )
}

export default Followers
