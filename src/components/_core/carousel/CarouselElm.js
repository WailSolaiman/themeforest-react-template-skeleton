import React from 'react'
import { Carousel, Button } from 'antd'
import useWindowWidth from '../_coreUtils'
import './carouselElm.scss'

const CarouselElm = ({ items = [] }) => {
    const windowWidth = useWindowWidth()
    return (
        <Carousel effect="fade" autoplay>
            {items &&
                items.map(item => {
                    const imageUrl =
                        windowWidth >= 576
                            ? item.desktopImage
                            : item.mobileImage
                    return (
                        <div
                            className="carousel-content"
                            key={`key-nr-${item.id}`}
                        >
                            <div
                                className="carousel-content__backgroundImage"
                                style={{ backgroundImage: `url(${imageUrl})` }}
                            />
                            <div className="carousel-content-absolute">
                                <h3 className="carousel-content-absolute__subheader">
                                    {item.subheader}
                                </h3>
                                <h1 className="carousel-content-absolute__header">
                                    {item.header}
                                </h1>
                                <Button>{item.btnText}</Button>
                            </div>
                        </div>
                    )
                })}
        </Carousel>
    )
}

export default CarouselElm
