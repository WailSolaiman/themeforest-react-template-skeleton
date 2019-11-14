import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Icon } from 'antd'
import { getArticles } from '../../components/_componentsData'
import './full-article.scss'

const FullArticle = () => {
    const article = getArticles()[0]
    const { Title, Paragraph } = Typography
    return (
        <div className="full-article">
            <div className="container">
                <img
                    className="full-article__image"
                    src={article.blogFigure}
                    alt={article.blogTitle}
                />
                <Title className="full-article__title" level={2}>
                    {article.blogTitle}
                </Title>
                <Paragraph className="full-article__calendar">
                    <Icon type="calendar" /> {article.publishDate}
                </Paragraph>
                <Paragraph className="full-article__excerpt">
                    {article.blogBody}
                </Paragraph>
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    )
}

export default FullArticle
