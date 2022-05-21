import React, { useEffect, useState } from "react"
import PostService from "./components/API/PostService"
import { useFetching } from "./components/hooks/useFetching"
import { usePosts } from "./components/hooks/usePosts"
import PostFilter from "./components/PostFilter"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import MyButton from "./components/UI/button/MyButton"
import Loader from "./components/UI/Loader/Loader"
import MyModal from "./components/UI/MyModal/MyModal"

const App = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => { fetchPosts() }, [])

  const createPost = (newPost) => {
    setPosts((prev) => [...prev, newPost])
    setModal(false)
  }
  
  const removePost = (id) => { setPosts((prev) => prev.filter(el => el.id !== id)) }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} >Create new post</MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{margin: "15px 0", border: "1px solid teal"}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading
        ?
        <Loader />
        :
        <PostList removePost={removePost}
          isPostsLoading={isPostsLoading}
          postError={postError}
          posts={sortedAndSearchedPosts}title={"Posts List"}
        />
      }
      {postError && 
        <h2 style={{margin: "30px", textAlign: "center", color: "red"}} >{postError}</h2>
      }
    </div>
  )
}

export default App
