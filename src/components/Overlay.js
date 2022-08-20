import React from 'react'

const Overlay = ({open , setOpen, setCurrent}) => {
  const handleClick = () => {
    setOpen(false)
    setCurrent(false)
  }
  
  return (
    <div className={ open ? 'overlay open' : "overlay"} onClick={() => handleClick()}>
    </div>
  )
}



export default Overlay
