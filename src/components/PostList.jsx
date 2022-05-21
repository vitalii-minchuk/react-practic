import React from "react"
import PostItem from "../components/PostItem"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const PostList = ({ posts, title, removePost, isPostsLoading, postError }) => {
  if (isPostsLoading || postError) {
    return <h1 style={{ textAlign: "center" }}>List is empty</h1>
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem removePost={removePost} key={post.id} post={post} index={index + 1} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  )
}

export default PostList