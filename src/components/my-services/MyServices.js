import React from 'react'
import { Row, Col } from 'antd'
import './my-services.scss'

const MyServices = ({ services = [] }) => {
    return (
        <Row gutter={24} className="my-services">
            <h2>My Services</h2>
            {services &&
                services.map(service => {
                    return (
                        <Col xs={24} md={12} lg={6} key={service.id}>
                            <div className="my-services__content">
                                <h5>{service.name}</h5>
                                <img src={service.img} alt={service.name} />
                                <p>{service.paragraph}</p>
                            </div>
                        </Col>
                    )
                })}
        </Row>
    )
}

export default MyServices
