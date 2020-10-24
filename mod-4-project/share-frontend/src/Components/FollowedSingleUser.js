import React from 'react'

function FollowedSingleUser(props) {
    console.log(props)
    return (
        <>
        <div class="ui four cards">
        <a class="red card">
          <div class="image">
          <img src={props.user.avatar} />
          </div>
        </a>
        </div>
        </>
    )
}

export default FollowedSingleUser
