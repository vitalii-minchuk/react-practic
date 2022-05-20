import React, { useState } from "react"
import MyInput from "./UI/input/MyInput"
import MyButton from "./UI/button/MyButton"

const PostForm = ({createPost}) => {
  const [post, setPost] = useState({ title: "", body: "" })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {...post, id: Date.now()}
    createPost(newPost)
    setPost({title: "", body: ""})
  }

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post title ..."
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post body ..."
      />
      <MyButton onClick={addNewPost} >Create new post</MyButton>
    </form>
  )
}
export default PostForm