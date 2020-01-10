import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import './contact.scss'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: {
                name: '',
                email: '',
                message: '',
            },
        }
    }

    componentDidMount() {
        const { form } = this.props
        form.validateFields()
    }

    hasErrors = fieldsError => {
        return Object.keys(fieldsError).some(field => fieldsError[field])
    }

    handleSubmit = e => {
        e.preventDefault()
        const { form } = this.props
        form.validateFields((err, values) => {
            if (!err) {
                this.setState({ values })
            }
        })
    }

    render() {
        const {
            values: { name, email, message },
        } = this.state
        const { form } = this.props
        const {
            getFieldDecorator,
            getFieldsError,
            getFieldValue,
            isFieldTouched,
            getFieldError,
        } = form
        const { TextArea } = Input
        const messageError =
            isFieldTouched('message') && getFieldError('message')
        const nameError = isFieldTouched('name') && getFieldError('name')
        const emailError = isFieldTouched('email') && getFieldError('email')

        return (
            <div className="contact">
                <h2 className="contact__header">Contact Me</h2>
                <h6 className="contact__subheader">
                    I’m always open to discussing product design work or
                    partnerships.
                </h6>
                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Item
                        label="Name"
                        validateStatus={nameError ? 'error' : ''}
                    >
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please enter your name!',
                                },
                            ],
                        })(<Input size="large" />)}
                    </Form.Item>
                    <Form.Item
                        label="E-mail"
                        validateStatus={emailError ? 'error' : ''}
                    >
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please enter your E-mail!',
                                },
                            ],
                        })(<Input size="large" />)}
                    </Form.Item>
                    <Form.Item
                        label="Message"
                        validateStatus={messageError ? 'error' : ''}
                    >
                        {getFieldDecorator('message', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please enter your Message!',
                                },
                            ],
                        })(
                            <TextArea
                                rows={4}
                                size="large"
                                autoSize={{ minRows: 3, maxRows: 6 }}
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                I have read the <a href="/">agreement</a>
                            </Checkbox>
                        )}
                    </Form.Item>
                    <Form.Item className="contact__submit">
                        <Button
                            className="btn-secondary"
                            type="primary"
                            htmlType="submit"
                            disabled={
                                this.hasErrors(getFieldsError()) ||
                                !getFieldValue('agreement')
                            }
                        >
                            Submit
                        </Button>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        {name !== '' && message !== '' ? (
                            <p>
                                Name: {name} - Email: {email} | Message:{' '}
                                {message}
                            </p>
                        ) : (
                            ''
                        )}
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Contact
