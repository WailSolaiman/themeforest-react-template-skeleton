import { useState, useEffect } from 'react'

const UseWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])
    return windowWidth
}

const GetNavbarStyle = (navbarStyle, selected) => {
    const [navStyle, setNavStyle] = useState({})
    useEffect(() => {
        const navigation = navbarStyle.filter(item => item.navbar === selected)
        navigation.forEach(item => {
            if (item.navbar === 'one-menu') {
                setNavStyle({
                    mainMenu: 'block',
                    mainMenuFloat: 'right',
                    secondaryMenu: 'none',
                    secondaryMenuFloat: 'none',
                })
            } else if (item.navbar === 'two-menues') {
                setNavStyle({
                    mainMenu: 'block',
                    mainMenuFloat: 'left',
                    secondaryMenu: 'block',
                    secondaryMenuFloat: 'right',
                })
            }
        })
    }, [navbarStyle, selected])
    return navStyle
}

export { UseWindowWidth, GetNavbarStyle }
