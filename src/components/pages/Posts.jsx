import React, { useEffect, useState } from "react"
import PostService from "../API/PostService"
import { useFetching } from "../hooks/useFetching"
import { usePosts } from "../hooks/usePosts"
import PostFilter from "../PostFilter"
import PostForm from "../PostForm"
import PostList from "../PostList"
import MyButton from "../UI/button/MyButton"
import Loader from "../UI/Loader/Loader"
import MyModal from "../UI/MyModal/MyModal"
import Pagination from "../UI/pagination/Pagination"
import { getPageCount } from "../utils/pages"

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => { fetchPosts(limit, page) }, [])

  const createPost = (newPost) => {
    setPosts((prev) => [...prev, newPost])
    setModal(false)
  }
  
  const removePost = (id) => { setPosts((prev) => prev.filter(el => el.id !== id)) }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }
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
        <h2 style={{margin: "30px", textAlign: "center", color: "red"}}>{postError}</h2>
      }
      <Pagination page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Posts
