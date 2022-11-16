export const PageAnimation = {
    hidden : {opacity: 0},
    show : {opacity: 1, transition: {duration : .25, ease: 'easeIn'}},
    exit: {opacity: 0}
}

export const HideParent = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            // when: "beforeChildren",
            staggerChildren: .1
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .5,
            ease: 'easeIn'
        }
    }
}

export const HideParent2 = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            // when: "beforeChildren",
            staggerChildren: .13
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .5,
            ease: 'easeIn'
        }
    }
}

export const scrollReveal = {
    hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

export const titleAnim = {
    hidden: {y: 100, opacity: 0},
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5, 
            ease: 'easeOut'
        }
    }
}

export const titleAnim2 = {
    hidden: {y: 100, opacity: 0},
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5, 
            ease: 'easeOut'
        }
    }
}

export const showImg = {
    hidden : {scale: 1},
    show: {
        scale: 1.15,
        transition: {duration: .5, ease: "easeOut"}
    }
}

export const showNav = {
    hidden: {
        opacity: 0,
        scale: 0,
        x: '-50%',
        y: '-50%',
        transition: {duration: .5, ease: "easeOut"}},
    show: {
        opacity: 1,
        scale: 200,
        x: '-50%',
        y: '-50%',
        transition: {duration: .5, ease: "easeOut"}
    },
    exit: {
        opacity: 0, scale: 0,
        transition: {duration: .5, ease: "easeOut"}
    }
}

export const HideMenuItems = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: .5,
            // when: "beforeChildren",
            staggerChildren: .1
        },
    }
}

export const colorChange = {
    hidden : {
        backgroundColor: '#000',
    },
    show : {
        backgroundColor: '#fff',
        transition: {
            duration : 1,

        }
    }   
}

export const MenuAnim = {
    hidden : {x: '-250px',transition: {duration : .2, ease: "easeOut"}},
    show : {x: '0', transition: {duration : .35, ease: "easeInOut"}}
}

export const HambLine1 = {
    close : {},
    open : {
        width: 15
    }
}

export const HambLine2 = {
    close : {},
    open : {
        width: 25
    }
}

export const buttonAnim = {
    hover : {
        textShadow: '0px 0px 8px rgba(0,0,0, .3)',
        boxShadow: '0px 0px 8px rgba(0,0,0, .3)',
        transition: {duration :.2}
    }
}

export const glow = {
    show: {
        boxShadow: '0px 0px 15px #50c878',
        transition: {
            yoyo : Infinity,
            duration : .85,
            ease: 'easeInOut'
        }   
    }
}

export const segregateAnim = {
    hidden: {
        height: 0,
    },
    show: {
        height: 'auto'
    }
}

export const arrowRotate = {
    set: {
            rotate: '0deg'
    },
    go: {
        rotate: '180deg'
    }
}

export const moveLink = {
    set: {
        x: '0'
    },
    go: {
        x: '10px'
    }
}

export const svgAnimate = {
    hidden: {
        rotate: -180
    },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

export const pathAnimate = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: '#fff',
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: '#0ec717',
        transition: { 
            duration: .5,
            ease: "easeInOut",
            fill: { delay: .5 }
        }
    }
}

export const pathAnimate2 = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: { 
            duration: 10,
            ease: "easeInOut",
            pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        }
    }
}

export const showCover = {
    hidden: {
        opacity: 0,
        y: 0
    },
    show: {
        opacity: 1,
        // y: -20
    }
}

export const btnSlideUp = {
    stop: {
        boxShadow: 0,
        y: 0,

    },
    work: {
        y: -3,
        scale: 1.01,
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
    }
}

export const ImgHover = {
    initial: {
        scale: 1
    },
    work: {
        scale: 1.01,
    }
}


export const Slide = {
    hidden: { opacity: 0, x: 10 },
    show: {x: 0, opacity: 1, transition: {duration : .5, staggerChildren: .099}},
    exit: {opacity: 0, y: 10, transition: {duration: .15}}
}