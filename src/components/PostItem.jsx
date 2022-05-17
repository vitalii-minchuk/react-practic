import React from "react"

const PostItem = ({post, index}) => {
  return (
    <>
      <div className="post">
        <div className="post__content">
          <strong>{index + ". " + post.title}</strong>
          <p>{post.body}</p>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </>
  )
}

export default PostItem