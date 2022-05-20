import React from "react"
import PostItem from "../components/PostItem"

const PostList = ({posts, title, removePost}) => {
  if(!posts.length) {
    return <h1 style={{textAlign: "center"}}>List is empty</h1>
  }

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