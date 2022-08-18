import React from 'react'

const Overlay = ({open , setOpen}) => {

    console.log(open)
  return (
    <div className={ open ? 'overlay open' : "overlay"} onClick={() => setOpen(false)}>
    </div>
  )
}



export default Overlay
