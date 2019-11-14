import React from 'react'
import { Row } from 'antd'
import './parallax.scss'

const Parallax = ({ parallax }) => {
    return (
        <Row className="parallax">
            <div
                className="parallax__image"
                style={{ backgroundImage: `url(${parallax.img})` }}
            >
                <h1 className="parallax__header">{parallax.header}</h1>
            </div>
        </Row>
    )
}

export default Parallax
