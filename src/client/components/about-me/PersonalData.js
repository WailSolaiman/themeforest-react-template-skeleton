import React from 'react'
import { Descriptions, Typography } from 'antd'
import './personal-data.scss'

const PersonalData = ({ personalData }) => {
    const { Title } = Typography
    const {
        firstname,
        lastname,
        birthdate,
        nationality,
        experience,
        address,
        freelance,
        langages,
        phone,
        email,
        skype,
        facebook,
    } = personalData
    return (
        <div className="personal-data">
            <Title level={1}>Personal Infos.</Title>
            <Descriptions layout="vertical">
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="First Name"
                >
                    {firstname}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Last Name"
                >
                    {lastname}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Birthdate"
                >
                    {birthdate}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Nationality"
                >
                    {nationality}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Experience"
                >
                    {experience}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Address"
                >
                    {address}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Freelance"
                >
                    {freelance}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Langages"
                >
                    {langages}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Phone"
                >
                    {phone}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Email"
                >
                    {email}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Skype"
                >
                    {skype}
                </Descriptions.Item>
                <Descriptions.Item
                    className="personal-data__descriptions"
                    label="Facebook"
                >
                    {facebook}
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default PersonalData
