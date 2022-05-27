import React from 'react'
import style from './Post.module.css'
export const Post = ({title, url, content}) => {
  return (
    <div className={style.post}>
        <h2>
           {title}
        </h2>
        <div className='avatar'>
            <img src={url} alt="" />
        </div>
        <p>
            {content}
        </p>
    </div>)
}
