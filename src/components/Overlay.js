import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Overlay = ({open , setOpen, setCurrent}) => {
  const handleClick = () => {
    setOpen(false)
  }

  open ? document.body.style.overflowY='hidden' : document.body.style.overflowY='unset'

  const {pathname} = useLocation()

  useEffect(()=> {
    setOpen(false)
  }, [pathname])

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
          position: fixed;
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
