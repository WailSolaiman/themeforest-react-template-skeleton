import React from 'react'
import { Button } from 'antd'
import useWindowWidth from '../_coreUtils'
import './heroImageElm.scss'

const HeroImageElm = ({ item = {} }) => {
    const imageUrl =
        useWindowWidth() >= 576 ? item.desktopImage : item.mobileImage
    return (
        <div className="hero-content">
            <div
                className="hero-content__backgroundImage"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="hero-content-absolute">
                <h3 className="hero-content-absolute__subheader">
                    {item.subheader}
                </h3>
                <h1 className="hero-content-absolute__header">{item.header}</h1>
                <Button>{item.btnText}</Button>
            </div>
        </div>
    )
}

export default HeroImageElm
