import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from '@react-spring/web'
import NavigationMenu from './NavigationMenu'
function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav>
            <span className="text-3xl cursor-pointer">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {
                maskTransitions((style, item) => {
                     if (item) {
                        return <animated.div
                            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                            style={style}
                            onClick={() => setShowMenu(false)}
                            >

                            </animated.div>
                    }
                }
                )
            }



            {
                menuTransitions((style, item) => {
                    if (item) {
                        return <animated.div
                            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                            style={style}>{item}
                             <NavigationMenu 
                            closeMenu={() => setShowMenu(false)}
                        />
                            </animated.div>
                    }
                }
                )
            }
        </nav>
    )
}

export default Navigation;