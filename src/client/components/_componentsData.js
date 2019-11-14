import uuidv4 from 'uuid/v4'
import CarouselImgFirstDesktop from '../assets/carousel/carousel-1-desktop.jpg'
import CarouselImgFirstMobile from '../assets/carousel/carousel-1-mobile.jpg'
import CarouselImgSecondDesktop from '../assets/carousel/carousel-2-desktop.jpg'
import CarouselImgSecondMobile from '../assets/carousel/carousel-2-mobile.jpg'
import CarouselImgThirdDesktop from '../assets/carousel/carousel-3-desktop.jpg'
import CarouselImgThirdMobile from '../assets/carousel/carousel-3-mobile.jpg'
import HeroImageDesktop from '../assets/heroimage/heroimage-desktop.jpg'
import HeroImageMobile from '../assets/heroimage/heroimage-mobile.jpg'

const navbarStyle = [
    {
        navbar: 'one-menu',
    },
    {
        navbar: 'two-menues',
    },
]

const carouselElements = [
    {
        id: uuidv4(),
        desktopImage: CarouselImgFirstDesktop,
        mobileImage: CarouselImgFirstMobile,
        subheader: 'Digital design studio',
        header: 'An application that will change your way of thinking.',
        btnText: 'Click Here',
    },
    {
        id: uuidv4(),
        desktopImage: CarouselImgSecondDesktop,
        mobileImage: CarouselImgSecondMobile,
        subheader: 'Digital design studio',
        header: 'More than just a web design.',
        btnText: 'Explore Now',
    },
    {
        id: uuidv4(),
        desktopImage: CarouselImgThirdDesktop,
        mobileImage: CarouselImgThirdMobile,
        subheader: 'Digital design studio',
        header: 'An application that will change your way of thinking.',
        btnText: 'Click Here',
    },
]

const homeHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Digital design studio',
    header: 'More than just a web design.',
    btnText: 'Explore Now',
}

const contactHeroImage = {
    id: uuidv4(),
    desktopImage: CarouselImgThirdDesktop,
    mobileImage: CarouselImgThirdMobile,
    subheader: 'Digital design studio',
    header: 'More than just a web design.',
    btnText: 'Explore Now',
}

const aboutMeData = {
    subtitle: 'About Me',
    title: 'Lorem ipsum Dolor',
    firstParagraph: `Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Voluptatibus sapiente alias
                minus saepe laborum corporis earum quaerat
                deserunt unde quidem. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.`,
    secondParagraph: `Lias minus saepe laborum corporis earum quaerat
                deserunt unde quidem. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.`,
    btnText: 'Learn More',
    image: HeroImageMobile,
}

const myServicesData = [
    {
        id: uuidv4(),
        name: 'Service A',
        img: HeroImageMobile,
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        id: uuidv4(),
        name: 'Service B',
        img: HeroImageMobile,
        paragraph: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus.`,
    },
    {
        id: uuidv4(),
        name: 'Service C',
        img: HeroImageMobile,
        paragraph: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere.`,
    },
    {
        id: uuidv4(),
        name: 'Service D',
        img: HeroImageMobile,
        paragraph: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
]

const projects = [
    {
        id: uuidv4(),
        name: 'Project A',
        img: HeroImageMobile,
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        id: uuidv4(),
        name: 'Project B',
        img: HeroImageMobile,
        paragraph: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus.`,
    },
    {
        id: uuidv4(),
        name: 'Project C',
        img: HeroImageMobile,
        paragraph: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere.`,
    },
    {
        id: uuidv4(),
        name: 'Project D',
        img: HeroImageMobile,
        paragraph: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
    {
        id: uuidv4(),
        name: 'Project E',
        img: HeroImageMobile,
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        id: uuidv4(),
        name: 'Project F',
        img: HeroImageMobile,
        paragraph: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus.`,
    },
    {
        id: uuidv4(),
        name: 'Project G',
        img: HeroImageMobile,
        paragraph: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere.`,
    },
    {
        id: uuidv4(),
        name: 'Project H',
        img: HeroImageMobile,
        paragraph: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
]

const testimonials = [
    {
        id: uuidv4(),
        title: 'Lorem ipsum 1',
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus. Commodi, 
            voluptatem. Earum nihil sit itaque in ut porro delectus. Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
    {
        id: uuidv4(),
        title: 'Lorem ipsum 2',
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere. Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
    {
        id: uuidv4(),
        title: 'Lorem ipsum 3',
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus. Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus. Temporibus distinctio sit, ipsum ex nam praesentium.`,
    },
]

const profileImage = CarouselImgThirdMobile

const personalData = {
    firstname: 'lorem',
    lastname: 'Ipsum',
    birthdate: '21 june 1990',
    nationality: 'U.S.A',
    experience: '7 years',
    address: 'Germany. Street Name, 12345 City',
    freelance: 'Available',
    langages: 'English, Germany',
    phone: '+34 21 18 40 10',
    email: 'you@you.com',
    skype: 'iltlc-0123',
    facebook: 'iltlc-f',
}

const experiences = [
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        career: 'Web Developer',
        company: 'Company GmbH',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        career: 'Web Developer',
        company: 'Company GmbH',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
]

const educations = [
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'Master Degree, University',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'Bachelor Degree, University',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'High School',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
]

const skills = [
    {
        id: uuidv4(),
        name: 'HTML5',
        value: 90,
    },
    {
        id: uuidv4(),
        name: 'CSS3',
        value: 80,
    },
    {
        id: uuidv4(),
        name: 'JavaScript',
        value: 60,
    },
]

const parallax = {
    img: CarouselImgFirstDesktop,
    header: 'Lorem ipsum Dolor',
}

const contactData = [
    {
        contactTitle: 'Address',
        contactIcon: 'home',
        contactContent: 'Germany. Street Name, 12345 City',
    },
    {
        contactTitle: 'Phone',
        contactIcon: 'phone',
        contactContent: '+49 176 77027455',
    },
    {
        contactTitle: 'Email',
        contactIcon: 'mail',
        contactContent: 'iltlc@hotmail.com',
    },
]

const socialMedia = [
    {
        id: uuidv4(),
        icon: 'facebook',
        link: '/',
    },
    {
        id: uuidv4(),
        icon: 'twitter',
        link: '/',
    },
    {
        id: uuidv4(),
        icon: 'youtube',
        link: '/',
    },
]

const articles = [
    {
        id: 'fsdfds',
        blogFigure: CarouselImgFirstDesktop,
        blogTitle: 'Lorem ipsum',
        blogExcerpt:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno.',
        blogBody:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
    {
        id: 'fsddds',
        blogFigure: CarouselImgFirstDesktop,
        blogTitle: 'Lorem ipsum 2',
        blogExcerpt:
            'Froogno Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the.',
        blogBody:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
]

const getNavbarStyle = () => {
    return navbarStyle
}

const getCarouselImages = () => {
    return carouselElements
}

const getHomeHeroImage = () => {
    return homeHeroImage
}

const getContactHeroImage = () => {
    return contactHeroImage
}

const getAboutMeData = () => {
    return aboutMeData
}

const getMyServicesData = () => {
    return myServicesData
}

const getProjects = () => {
    return projects
}

const getTestimonials = () => {
    return testimonials
}

const getParallax = () => {
    return parallax
}

const getprofileImage = () => {
    return profileImage
}

const getPersonalData = () => {
    return personalData
}

const getExperiences = () => {
    return experiences
}

const getEducations = () => {
    return educations
}

const getSkills = () => {
    return skills
}

const getContactData = () => {
    return contactData
}

const getSocialMedia = () => {
    return socialMedia
}

const getArticles = () => {
    return articles
}

export {
    getNavbarStyle,
    getHomeHeroImage,
    getContactHeroImage,
    getCarouselImages,
    getAboutMeData,
    getMyServicesData,
    getProjects,
    getTestimonials,
    getParallax,
    getprofileImage,
    getPersonalData,
    getExperiences,
    getEducations,
    getSkills,
    getContactData,
    getSocialMedia,
    getArticles,
}
