import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Overlay = ({open , setOpen, setCurrent}) => {
  const handleClick = () => {
    setOpen(false)
  }
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
          background: rgba(0,0,0,0.95);
          display: block;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
      }
  }
`


export default Overlay
