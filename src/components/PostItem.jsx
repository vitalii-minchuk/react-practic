import React from "react"

const PostItem = () => {
  return (
    <>
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <p>Javascript is the best programming language</p>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </>
  )
}

export default PostItem