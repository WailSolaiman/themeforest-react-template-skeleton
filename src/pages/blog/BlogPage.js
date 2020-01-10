import React from 'react'
import { Row, Col } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import Articles from './Articles'
import {
    getContactHeroImage,
    getCarouselImages,
} from '../../components/_componentsData'

const BlogPage = () => {
    const heroImage = getContactHeroImage()
    const carousel = getCarouselImages()
    return (
        <div className="blog-page">
            <Header
                heroImage={heroImage}
                carousel={carousel}
                selected="heroImage"
            />
            <div className="container">
                <Row className="row-with-margin-bottom">
                    <Col xs={24}>
                        <PageTitle
                            title="Latest Posts"
                            subtitle="Tips, Insights, And Best Practices About Web Design And Developpment"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <Articles />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BlogPage
