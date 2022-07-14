import React ,{useState, useRef}from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
// anim
import {HideParent} from '../animation'

//images
import PageInfo from '../PageInfo'

const CirclePhoto = () => {
    const [img, setImg] = useState(PageInfo[1].imgs)
    const constraintsRef = useRef(null)
    // console.log(img)
    return (
        <CircleContainer
        variants={HideParent}
        animate='show'
        initial="hidden"
        exit='exit'
        ref={constraintsRef}>
            <Carousel
            drag='x'
            dragConstraints={constraintsRef}
            >
            {img.map((item, index) => (
                 <Circle1         
                    src={item.img}
                    className={index % 2 ? 'even' : ''}
                /> 

            )
            )}

           </Carousel>
        </CircleContainer>
    )
}

const CircleContainer = styled(motion.div)`
    overflow: hidden;
    width: 100%;
    position: fixed;
    bottom: 5%;
    left: 0;
    display: flex;
    justify-content: center;
    z-index: -1;
`

const Carousel = styled(motion.div)`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 1rem;
`

const Circle1 = styled(motion.img)`
    width: 50px;
    height: 50px;
    object-fit: none;
    border-radius: 50%;
    cursor: grab;
    filter: brightness(0.85);
    display: block;
    pointer-events: none;
`
export default CirclePhoto