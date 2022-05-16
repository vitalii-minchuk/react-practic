import React from "react"
import PostItem from "../components/PostItem"

const PostList = ({posts}) => {
  return (
    <>
      <h1>List of posts</h1>
      {posts.map(post => 
        <PostItem post={post} />
      )}
    </>
  )
}

export default PostList