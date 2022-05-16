import React, { useState } from "react"
import PostList from "./components/PostList"

const App = () => {
  const [posts, setPosts] = useState([])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Type here ..." />
        <button>Create new post</button>
      </form>
      <PostList posts={posts} />
    </div>
  )
}

export default App
