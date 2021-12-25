import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import about from "../../Assets/about.png";
import './About.css'
import Skills from './../Skills/Skills';


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            className="about-img "
          >
            <img src={about} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            className=""
          >
            <h1 className="title" style={{ paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading my-4">
          MY  <strong className="purple">SKILLS! </strong>
          <Skills></Skills>
        </h1>
      </Container>
    </Container>
  );
}

export default About;
