import React from 'react'
import { Timeline, Icon, Typography } from 'antd'
import './experience.scss'

const Experience = ({ experiences = [] }) => {
    const { Title, Paragraph } = Typography
    return (
        <div className="experience">
            <Title level={1}>Experience</Title>
            <Timeline className="experience__timeline">
                {experiences &&
                    experiences.map(experience => {
                        return (
                            <Timeline.Item
                                key={experience.id}
                                color="green"
                                dot={
                                    <Icon
                                        type="clock-circle-o"
                                        style={{ fontSize: '16px' }}
                                    />
                                }
                            >
                                <Paragraph className="experience__calendar">
                                    <Icon type="calendar" /> {experience.from} -{' '}
                                    {experience.to}
                                </Paragraph>
                                <Title
                                    className="experience__title"
                                    type="secondary"
                                    level={4}
                                >
                                    {experience.career} - {experience.company}
                                </Title>
                                <Paragraph>{experience.description}</Paragraph>
                            </Timeline.Item>
                        )
                    })}
            </Timeline>
        </div>
    )
}

export default Experience
