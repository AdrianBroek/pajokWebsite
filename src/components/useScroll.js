import { useInView } from "react-intersection-observer";
import { useAnimation } from 'framer-motion'

export const useScroll = () => {
    const [element, view] = useInView({ threshold: 0.5, triggerOnce: true })
    console.log(view)
    const controls = useAnimation()
    view ? controls.start("show") : controls.start('hidden')

    return [element, controls]
}
