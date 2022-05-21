import React, { useMemo } from "react"
import { getPagesArray } from "../../utils/pages"
import s from "./Pagination.module.css"

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray =  useMemo(() => {
    return getPagesArray(totalPages)
  }, [page, totalPages])

  return (
    <>
    <div className={s.pagination}>
      {pagesArray.map(p => (
        <span className={page === p ? s.pageCurrent : s.page} key={p} onClick={() => changePage(p)}>{p}</span>
      ))}
    </div>
    </>
  )
}
export default Pagination