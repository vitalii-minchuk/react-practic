import React, { useState } from "react"
import PostList from "./components/PostList"
import MyButton from "./components/UI/button/MyButton"
import MyInput from "./components/UI/input/MyInput"

const App = () => {
  const [posts, setPosts1] = useState([
    {id: 1, title: "Javascript", body: "Probably the best programming lang"},
    {id: 2, title: "Typescript", body: "Probably the best programming lang"},
    {id: 3, title: "Php", body: "Probably the best programming lang"}
  ])

  const [post, setPost] = useState({ title: "", body: "" })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts1((prev) => [...prev, {...post, id: Date.now()}])
    setPost({title: "", body: ""})
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Post title ..."
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Post body ..."
        />
        <MyButton onClick={addNewPost} >Create new post</MyButton>
      </form>
      <PostList posts={posts} title={"Posts List"} />
    </div>
  )
}

export default App
