import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
// import items
import segregateList from '../segregate'
import { segregateAnim } from '../animation'

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
        <div className="cont" onClick={() => setOpen(!open)}>
        <p>{loaded[active].text}</p>

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
        width: 5%;
        min-width: 50px;
        position: relative;
        overflow: hidden;
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
        &:hover { 
            background: #000;
            color: #fff;
        }
    }
`

export default Segregate

