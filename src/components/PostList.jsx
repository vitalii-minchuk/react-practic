import React from "react"
import PostItem from "../components/PostItem"

const PostList = ({posts, title}) => {
  return (
    <>
      <h1 style={{textAlign: "center"}}>{title}</h1>
      {posts.map((post, index) => 
        <PostItem key={post.id} post={post} index={index +1} />
      )}
    </>
  )
}

export default PostList