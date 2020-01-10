import React from 'react'
import { Typography } from 'antd'
import './page-title.scss'

const PageTitle = ({ title, subtitle }) => {
    const { Title } = Typography
    return (
        <div className="page-title">
            <Title className="page-title__header">{title}</Title>
            <Title className="page-title__subheader" level={4}>
                {subtitle}
            </Title>
        </div>
    )
}

export default PageTitle
