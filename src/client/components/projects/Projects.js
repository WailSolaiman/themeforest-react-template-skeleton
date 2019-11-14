import React from 'react'
import { Row, Col, Card } from 'antd'
import './projects.scss'

const Projects = ({ projects = [] }) => {
    const { Meta } = Card
    return (
        <Row gutter={24} className="projects">
            <h2>Projects</h2>
            {projects &&
                projects.map(project => {
                    return (
                        <Col xs={24} md={12} lg={8} xl={6} key={project.id}>
                            <div className="projects__content">
                                <Card
                                    className="card"
                                    title={project.name}
                                    extra={<a href="/">More</a>}
                                    cover={
                                        <img
                                            alt={project.name}
                                            src={project.img}
                                        />
                                    }
                                >
                                    <Meta
                                        title={project.name}
                                        description={project.paragraph}
                                    />
                                </Card>
                                ,
                            </div>
                        </Col>
                    )
                })}
        </Row>
    )
}

export default Projects
