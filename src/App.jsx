import React, { useMemo, useState } from "react"
import PostFilter from "./components/PostFilter"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import MyButton from "./components/UI/button/MyButton"
import MyModal from "./components/UI/MyModal/MyModal"

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Probably the best programming lang"},
    {id: 2, title: "Typescript", body: "By far the best programming lang"},
    {id: 3, title: "Php", body: "Maybe the best programming lang"}
  ])

  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)

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
    setModal(false)
  }

  const removePost = (id) => {
    setPosts((prev) => prev.filter(el => el.id !== id))
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} >Create new post</MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{margin: "15px 0", border: "1px solid teal"}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList removePost={removePost}
        posts={sortedAndSearchedPosts}title={"Posts List"}
      />
    </div>
  )
}

export default App
