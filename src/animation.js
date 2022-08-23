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

export const showImg = {
    hidden : {opacity: 0, scale: 1.2},
    show: {
        opacity: 1,
        scale: 1,
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

export const photoAnim = {
    
}