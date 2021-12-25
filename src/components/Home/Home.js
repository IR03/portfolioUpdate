import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";
// import Home2 from "./Home2";
import Type from "./Type";
import Projects from './../Projects/Projects';
import About from "../About/About";
import Services from "../Services/Services";
import LifeJourney from "../LifeJourney/LifeJourney";
import Contact from './../Contact/Contact';
import Testimonials from './../Testimonials/Testimonials';
import headerBg from '../../Assets/headerBg.png'
import Button from "react-bootstrap/Button";
import ParticleAnimation from "../ParticleAnimation";
import ProjectSection from './../ProjectSection/ProjectSection';
import Skills from './../Skills/Skills';
import Experience from "../Experience/Experience";
import Blog from './../Blog/Blog';
function Home() {
  return (
    <>
      <Container fluid className="header-area home-content" >
        <Row>
          <ParticleAnimation></ParticleAnimation>
          <Col md={6} className="home-header" >
            <div className="d-flex justify-content-center animate__backInUp wow animate__animated animate__fast animate__delay-1s" style={{ marginLeft: '80px' }}>
              <div>
                <span className="d-block world" style={{ color: 'rgba(198,201,216,.75)' }}>WELCOME TO MY WORLD</span>
                <h1 className="title" className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>
                <h1 className="title text-white">
                  I’m Iftikhar Md. Sakib
                </h1>
                <div style={{ textAlign: "left" }}>
                  <Type />
                </div>
                <Button className="mt-4 downloadCV" variant="primary" href="https://drive.google.com/drive/folders/1tLno3WzJ3aHeidwe1F4OfANMDG-UDGWb?usp=sharing" target="_blank">
                  <i className="fas fa-download">&nbsp;</i>Get Resume
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <img src={headerBg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Particle />
      </Container>
      <About></About>
      <Services></Services>
      <ProjectSection></ProjectSection>
      {/* <Blog></Blog> */}
      <Experience></Experience>
      {/* <LifeJourney></LifeJourney> */}
      {/* <Testimonials></Testimonials> */}
      <Contact></Contact>
    </>
  );
}

export default Home;
