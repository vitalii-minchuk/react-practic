import React from "react"
import MyButton from "./UI/button/MyButton"

const PostItem = ({post, index, removePost}) => {
  return (
    <>
      <div className="post">
        <div className="post__content">
          <strong>{index + ". " + post.title}</strong>
          <p>{post.body}</p>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => removePost(post.id)}>Delete</MyButton>
        </div>
      </div>
    </>
  )
}

export default PostItem