import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { UseWindowWidth } from './_navbarUtils'

const MainMenu = () => {
    const mode = UseWindowWidth() >= 576 ? 'horizontal' : 'inline'

    return (
        <Menu mode={mode}>
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="blog">
                <Link to="/blog">Blogs</Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="contact">
                <Link to="/contact">Contact</Link>
            </Menu.Item>
        </Menu>
    )
}

export default MainMenu
