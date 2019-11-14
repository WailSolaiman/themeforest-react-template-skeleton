import React from 'react'
import { Row, Col, Slider, Typography } from 'antd'
import './skills.scss'

const marks = {
    0: '0',
    25: '25%',
    50: '50%',
    75: '75%',
    100: {
        style: {
            color: '#f50',
        },
        label: <strong>100%</strong>,
    },
}

const formatter = value => {
    return `${value}%`
}

const Skills = ({ skills = [] }) => {
    const { Title } = Typography
    return (
        <div className="skills">
            <Title level={1}>Skills</Title>
            <Row gutter={{ xs: 0, xl: 24 }}>
                {skills &&
                    skills.map(skill => {
                        return (
                            <Col key={skill.id} xs={24} xl={12}>
                                <h6 className="skills__subtitle">
                                    {skill.name}
                                </h6>
                                <Slider
                                    marks={marks}
                                    defaultValue={skill.value}
                                    tipFormatter={formatter}
                                    disabled
                                />
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}

export default Skills
