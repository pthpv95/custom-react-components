import React, {  useEffect, useState, useRef } from "react"

const Child = ({ message }) => {
  const [isShow, setIsShow] = useState(false)
  const ref = useRef(null)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)

    if (message) {
      setIsShow(true)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [message])

  return (
    <div
      style={{
        height: "150px",
        width: "150px",
        backgroundColor: "lightblue",
        borderStyle: "dotted"
      }}
      ref={ref}
    >
      {message}
      {isShow && <p>Show this is just dummy text.</p>}
    </div>
  )
}

export default Child;