import React from "react"
import PostItem from "../components/PostItem"

const PostList = ({posts, title, removePost}) => {
  return (
    <>
      <h1 style={{textAlign: "center"}}>{title}</h1>
      {posts.map((post, index) => 
        <PostItem removePost={removePost} key={post.id} post={post} index={index +1} />
      )}
    </>
  )
}

export default PostList