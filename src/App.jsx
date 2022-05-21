import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Posts from "./components/pages/Posts"
import PostsScroll from "./components/pages/PostsScroll"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/scroll" element={<PostsScroll />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
