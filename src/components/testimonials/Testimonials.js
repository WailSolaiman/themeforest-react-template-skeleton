import React from 'react'
import { Carousel, Card, Avatar } from 'antd'
import './testimonials.scss'

const Testimonials = ({ testimonials = [] }) => {
    const { Meta } = Card
    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <Carousel>
                {testimonials &&
                    testimonials.map(testimonial => {
                        return (
                            <Card key={testimonial.id}>
                                <Meta
                                    avatar={<Avatar src={testimonial.avatar} />}
                                    title={testimonial.title}
                                    description={testimonial.description}
                                />
                            </Card>
                        )
                    })}
            </Carousel>
        </div>
    )
}

export default Testimonials
