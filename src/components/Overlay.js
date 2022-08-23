import React from 'react'
import styled from 'styled-components'

const Overlay = ({open , setOpen, setCurrent}) => {
  const handleClick = () => {
    setOpen(false)
    console.log('over click')
  }
  
  return (
    <OverlayStyle 
      className={ open ? 'overlay open' : "overlay"} 
      onClick={() => handleClick()}>
    </OverlayStyle>
  )
}

const OverlayStyle = styled.div`
    &.overlay {
      display: none;
      &.open {
          position: absolute;
          background: #000000b5;
          display: block;
          
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
      }
  }
`


export default Overlay
