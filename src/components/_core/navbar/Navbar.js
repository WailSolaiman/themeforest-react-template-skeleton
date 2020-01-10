import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Drawer, Button } from 'antd'
import MainMenu from './MainMenu'
import SecondaryMenu from './SecondaryMenu'
import { UseWindowWidth, GetNavbarStyle } from './_navbarUtils'
import './navbar.scss'

const Navbar = ({ navbarStyle = [], selected }) => {
    const windowWidth = UseWindowWidth() >= 576 ? 'none' : 'block'
    const [visible, setVisibility] = useState(false)
    const navStyle = GetNavbarStyle(navbarStyle, selected)

    return (
        <div className="container">
            <Row>
                <Col xs={24}>
                    <nav className="menu-bar">
                        <div className="logo">
                            <p>ILTLC</p>
                        </div>
                        <div className="menu-content">
                            <div
                                className="menu-content__main-menu"
                                style={{
                                    display: `${navStyle.mainMenu}`,
                                    float: `${navStyle.mainMenuFloat}`,
                                }}>
                                <MainMenu />
                            </div>
                            <div
                                className="menu-content__secondary-menu"
                                style={{
                                    display: `${navStyle.secondaryMenu}`,
                                    float: `${navStyle.secondaryMenuFloat}`,
                                }}>
                                <SecondaryMenu />
                            </div>
                            <Button
                                className="bars-menu"
                                onClick={() => setVisibility(true)}
                                style={{ display: `${windowWidth}` }}>
                                <span className="bars-btn" />
                            </Button>
                            <Drawer
                                className="menu-content__drawer"
                                title="Basic Drawer"
                                placement="right"
                                closable={false}
                                onClose={() => setVisibility(false)}
                                visible={visible}>
                                <MainMenu />
                                <SecondaryMenu />
                            </Drawer>
                        </div>
                    </nav>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar
