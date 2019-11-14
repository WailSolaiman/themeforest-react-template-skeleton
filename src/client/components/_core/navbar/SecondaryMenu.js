import React from 'react'
import { Menu } from 'antd'
import { UseWindowWidth } from './_navbarUtils'

const SecondaryMenu = () => {
    const mode = UseWindowWidth() >= 576 ? 'horizontal' : 'inline'
    return (
        <Menu mode={mode}>
            <Menu.Item key="mail">
                <a href="/signin">Signin</a>
            </Menu.Item>
            <Menu.Item key="app">
                <a href="/signup">Signup</a>
            </Menu.Item>
        </Menu>
    )
}

export default SecondaryMenu
