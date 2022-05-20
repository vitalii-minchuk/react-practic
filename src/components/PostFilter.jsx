import React from "react"
import MyInput from "./UI/input/MyInput"
import MySelect from "./UI/select/MySelect"

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search ..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>  setFilter({...filter, sort: selectedSort})}
        defaultValue="sort by"
        options={[
          { value: "title", name: "title" },
          { value: "body", name: "description" }
        ]}
      />
    </>
  )
}

export default PostFilter