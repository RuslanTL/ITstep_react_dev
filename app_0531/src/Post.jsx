import React from 'react'
import './Post.css'
export const Post = (props) => {
  return (
    <div className="post">
        <div className="user">
            <h4>{props.userId}</h4>
            <h5>{props.id}</h5>
        </div>
        <div className="content">
            <h4>Title: {props.title}</h4>
            <h5>{props.body}</h5>
        </div>


    </div>
  )
}
