import React, { useEffect, useRef, useState } from "react"
import PostService from "../API/PostService"
import { useFetching } from "../hooks/useFetching"
import { usePosts } from "../hooks/usePosts"
import PostFilter from "../PostFilter"
import PostForm from "../PostForm"
import PostList from "../PostList"
import MyButton from "../UI/button/MyButton"
import Loader from "../UI/Loader/Loader"
import MyModal from "../UI/MyModal/MyModal"
import { getPageCount } from "../utils/pages"

const PostsScroll = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()
  const observer = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    if(isPostsLoading) return
    if(observer.current) observer.current.disconnect()
    var callback = function(entries, observer) {
      if(entries[0].isIntersecting && page < totalPages) {
        setPage(page + 1)
      }
    }
    observer.current = new IntersectionObserver(callback)
    observer.current.observe(lastElement.current)
  }, [isPostsLoading])

  useEffect(() => {
    fetchPosts(limit, page) 
  }, [page])

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
      <PostList removePost={removePost}
        isPostsLoading={isPostsLoading}
        postError={postError}
        posts={sortedAndSearchedPosts}title={"Posts List"}
      />
      <div ref={lastElement} style={{height: "10px"}}></div>
      {isPostsLoading && <Loader />}
      {postError && 
        <h2 style={{margin: "30px", textAlign: "center", color: "red"}}>{postError}</h2>
      }
    </div>
  )
}

export default PostsScroll