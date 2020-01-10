import React from 'react'
import { Timeline, Icon, Typography } from 'antd'
import './education.scss'

const Education = ({ educations = [] }) => {
    const { Title, Paragraph } = Typography
    return (
        <div className="education">
            <Title level={1}>Education</Title>
            <Timeline className="experience__timeline">
                {educations &&
                    educations.map(education => {
                        return (
                            <Timeline.Item
                                key={education.id}
                                color="green"
                                dot={
                                    <Icon
                                        type="clock-circle-o"
                                        style={{ fontSize: '16px' }}
                                    />
                                }
                            >
                                <Paragraph className="experience__calendar">
                                    <Icon type="calendar" /> {education.from} -{' '}
                                    {education.to}
                                </Paragraph>
                                <Title
                                    className="experience__title"
                                    type="secondary"
                                    level={4}
                                >
                                    {education.academy}
                                </Title>
                                <Paragraph>{education.description}</Paragraph>
                            </Timeline.Item>
                        )
                    })}
            </Timeline>
        </div>
    )
}

export default Education
