import React from 'react'
import { List, Typography, Icon } from 'antd'
import './contact-data.scss'

const ContactData = ({ contactData = [] }) => {
    const { Title, Paragraph } = Typography
    return (
        <div className="contact-data">
            <Title level={3}>Contact Infos.</Title>
            <List
                itemLayout="horizontal"
                dataSource={contactData}
                renderItem={item => (
                    <List.Item className="contact-data__item">
                        <Title level={4} className="contact-data__title">
                            {item.contactTitle}
                        </Title>
                        <Paragraph className="contact-data__paragraph">
                            <span className="contact-data__icon">
                                <Icon type={item.contactIcon} />
                            </span>
                            {item.contactContent}
                        </Paragraph>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ContactData
