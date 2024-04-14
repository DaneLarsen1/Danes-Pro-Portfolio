import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import MyPhoto from '../assets/images/MyPhoto.jpg'; // Make sure the path to your image is correct

const About = () => {
    return (
        <Container style={{ marginTop: '8rem', marginBottom: '2rem' }}>
            <Row className="align-items-center"> 
                <Col xs={12} md={6} lg={4}>
                    <Image src={MyPhoto} alt="My Photo" thumbnail fluid />
                </Col>
                <Col xs={12} md={6} lg={8}>
                    <h2>About Me</h2>
                    <p style={{ textAlign: 'center'}}>
                        Hello! I'm Dane, a passionate developer with a focus on creating
                        engaging and efficient digital experiences. I specialize in web development
                        and have worked on various projects that you can see in my portfolio section.
                        I am always eager to learn more and expand my skills. Thank you for visiting my
                        portfolio!
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
