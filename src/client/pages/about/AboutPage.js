import React from 'react'
import { Row, Col } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import ProfileImage from '../../components/about-me/ProfileImage'
import PersonalData from '../../components/about-me/PersonalData'
import Experience from '../../components/about-me/Experience'
import Education from '../../components/about-me/Education'
import Skills from '../../components/about-me/Skills'
import {
    getContactHeroImage,
    getCarouselImages,
    getExperiences,
    getprofileImage,
    getPersonalData,
    getEducations,
    getSkills,
} from '../../components/_componentsData'

const AboutPage = () => {
    const heroImage = getContactHeroImage()
    const carousel = getCarouselImages()
    const experiences = getExperiences()
    const profileImage = getprofileImage()
    const personalData = getPersonalData()
    const educations = getEducations()
    const skills = getSkills()
    return (
        <div className="about-page">
            <Header
                heroImage={heroImage}
                carousel={carousel}
                selected="heroImage"
            />
            <div className="container">
                <Row className="row-with-margin-bottom">
                    <Col xs={24}>
                        <PageTitle
                            title="About Me"
                            subtitle="I design and code beautiful things, and I love what I do."
                        />
                    </Col>
                </Row>
                <Row
                    className="row-with-margin-bottom"
                    gutter={{ xs: 0, xl: 24 }}>
                    <Col xs={24} xl={8}>
                        <ProfileImage profileImage={profileImage} />
                    </Col>
                    <Col xs={24} xl={16}>
                        <PersonalData personalData={personalData} />
                    </Col>
                </Row>
                <Row gutter={{ xs: 0, xl: 24 }}>
                    <Col xs={24} xl={12}>
                        <Experience experiences={experiences} />
                    </Col>
                    <Col xs={24} xl={12}>
                        <Education educations={educations} />
                    </Col>
                    <Col xs={24}>
                        <Skills skills={skills} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutPage
