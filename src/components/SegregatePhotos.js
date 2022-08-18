import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
// import items
import segregateList from '../segregate'
import { segregateAnim } from '../animation'
import Overlay from './Overlay'
// icons
import arrow from '../images/icons/arrow-up.svg'
import {Icon} from '../style/styles'
// animation
import {arrowRotate} from '../animation'

const Segregate = ({grid, setGrid}) => {
    const [loaded, setLoaded] = useState(segregateList)
    const [active, setActive] = useState(1)
    const [open, setOpen] = useState(false)

    function segregate(grid, index) {
        setActive(index)
        setTimeout(() => setGrid(grid), [100])
    }

    return (
        <SegregateStyle>
        <h4>Widok: </h4>
        <Overlay open={open} setOpen={setOpen} />
        <div className="cont" onClick={() => setOpen(!open)}>
        <div class="itemCont">
            <p>{loaded[active].text}</p>
            <motion.img className='noselect' variants={arrowRotate} initial='set' animate={open ? 'go' : 'set'} src={arrow}></motion.img>
        </div>
        <motion.div 
            className='container' 
            variants={segregateAnim}
            initial="hidden"
            animate={open ? 'show' : 'hidden'}
        >
            {loaded.map((item, index) => (
                    
                    <div 
                    className='block'
                    onClick={() => segregate(item.grid, index)}
                    >
                        <div className="">
                            {item.text}
                        </div>
                    </div>
            ))}

        </motion.div>

        </div>    
    </SegregateStyle>
    )
}


const SegregateStyle = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: rgba(0,0,0, 0.03);
    padding: .5rem;
    column-gap: 2rem;
    font-family: 'Jost', sans-serif;
    .overlay {
            display: none;
            &.open {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
            }
        }
    h4, p, .block  {
        font-weight: 300;
    }
    p {
        font-size: 1.15rem;
        padding: 0 .5rem;
    }
    .cont {
        background: white;
        border: 1px solid black;
        min-width: 70px;
        overflow: hidden;
        cursor: pointer;
        z-index: 2;
        .itemCont {
            display: flex;
            justify-content: space-between;
            img {
                max-width: 11px;
                margin-right: 0.5rem;
            }
        }
    }
    .container {
        top: 100%;
        left: 0;
        width: 100%;
        background: #fff;
        border-top: 0;
    }
    .block {
        padding: 0 .5rem;
        z-index: 10;
        &:hover { 
            background: #000;
            color: #fff;
        }
    }
`

export default Segregate

