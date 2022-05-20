import React from "react"
import s from "./MyModal.module.css"

const MyModal = ({children, visible, setVisible}) => {
  const rootClasses = [s.myModal]
  
  if(visible) {
    rootClasses.push(s.active)
  }

  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      <div onClick={(e) => e.stopPropagation()} className={s.myModalContent}>
        {children}
      </div>
    </div>
  )
}

export default MyModal