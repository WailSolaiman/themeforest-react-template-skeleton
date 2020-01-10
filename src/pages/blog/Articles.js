import React from 'react'
import { Row, Col } from 'antd'
import Article from './Article'
import { getArticles } from '../../components/_componentsData'

const Articles = () => {
    const articles = getArticles()
    return (
        <Row gutter={{ xs: 0, xl: 24 }}>
            {articles &&
                articles.map(article => {
                    return (
                        <Col xs={24} xl={12} key={article.id}>
                            <Article article={article} />
                        </Col>
                    )
                })}
        </Row>
    )
}

export default Articles
