import React, { useMemo, useState } from "react"
import PostFilter from "./components/PostFilter"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Probably the best programming lang"},
    {id: 2, title: "Typescript", body: "By far the best programming lang"},
    {id: 3, title: "Php", body: "Maybe the best programming lang"}
  ])

  const [filter, setFilter] = useState({sort: "", query: ""})

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [posts, filter.sort])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts((prev) => [...prev, newPost])
  }

  const removePost = (id) => {
    setPosts((prev) => prev.filter(el => el.id !== id))
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr style={{margin: "15px 0"}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length
        ?
        <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={"Posts List"} />
        :
        <h1 style={{textAlign: "center"}}>List is empty</h1>
      }
    </div>
  )
}

export default App
