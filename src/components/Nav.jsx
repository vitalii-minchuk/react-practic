import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Posts</Link>
        <Link to="/scroll">Posts-scroll</Link>
      </ul>
    </nav>
  )
}

export default Nav