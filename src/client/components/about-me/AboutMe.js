import React from 'react'
import { Row, Col, Button } from 'antd'
import './about-me.scss'

const AboutMe = ({
    subtitle = '',
    title = '',
    firstParagraph = '',
    secondParagraph = '',
    btnText = '',
    image = '',
}) => {
    return (
        <Row gutter={{ xs: 0, xl: 24 }} className="row-with-padding about-me">
            <Col xs={24} md={12}>
                <div className="about-me__text">
                    <h6>{subtitle}</h6>
                    <h2>{title}</h2>
                    <p>{firstParagraph}</p>
                    <p>{secondParagraph}</p>
                    <Button className="btn-secondary">{btnText}</Button>
                </div>
            </Col>
            <Col xs={24} md={12}>
                <div className="about-me__img">
                    <img src={image} alt="intro-img" />
                </div>
            </Col>
        </Row>
    )
}

export default AboutMe
