import React from 'react'
import CarouselElm from '../carousel/CarouselElm'
import HeroImage from '../heroimage/HeroImageElm'
import './header.scss'

const Header = ({ heroImage, carousel, selected }) => {
    return (
        <div className="header">
            {selected === 'heroImage' ? (
                <HeroImage item={heroImage} />
            ) : (
                <CarouselElm items={carousel} />
            )}
        </div>
    )
}

export default Header
