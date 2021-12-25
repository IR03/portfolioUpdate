import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import shop from "../../Assets/Projects/shop.png";
import editor from "../../Assets/Projects/codeEditor.png";
import eeg from "../../Assets/Projects/eeg.gif";
import country from "../../Assets/Projects/country.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";
import hashtech from "../../Assets/Projects/hashtech.png";
import doctors from "../../Assets/Projects/doctors-portal.png";
import burj from "../../Assets/Projects/burj-al-arab.png";
import panda from "../../Assets/Projects/panda-ecommerce.png";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h5 style={{color:'#f9004d',letterSpacing:'2px', fontWeight:'bold'}}>Projects</h5>
                    <h1>My Recent Works</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hashtech}
              isBlog={false}
              title="Hastech IT Solution BD"
              description=" It is an agency website, which serves some services like web development, graphics design, mobile application design, photography etc. "
              link="https://github.com/marufpbt/hashtech-client"
              live="https://hashtechitsolutionbd.web.app/"
              tech="Technology used:"
              techdesc="React, Bootstrap4, Node, Express, MongoDB, Firebase, React Router"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctors}
              isBlog={false}
              title="Doctor's Portal"
              description=" A Single page web app with dashboard where people can pick the date and time and fix an appointment. "
              link="https://github.com/marufpbt/doctors-portal-client"
              live="https://doctors-portal-marufpbt.web.app/"
              tech="Technology used:"
              techdesc="React, Bootstrap4, Node, Express, MongoDB, Firebase, React Router"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burj}
              isBlog={false}
              title="Burj Al Arab"
              description="A Single page web app with dashboard where people can pick the date and time and fix room booking."
              link="https://github.com/marufpbt/burj-al-arab"
              live="https://burj-al-arab-59182.web.app/"
              tech="Technology used:"
              techdesc="React, Bootstrap4, Node, Express, MongoDB, Firebase, React Router"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={panda}
              isBlog={false}
              title="Panda Ecommerce"
              description="A single page ecommerce app where people are able to select shopping in their cart and checkout the cart with their information ."
              link="https://github.com/marufpbt/shopping-cart"
              live="https://marufpbt.github.io/panda-ecommerce-bootstrap/"
              tech="Technology used:"
              techdesc="HTML5, CSS3, Bootstrap4, GitHub Hosting"
            />
          </Col>

        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={editor}
              link="https://www.gitbook.com/"
              title="Freelancing"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/"
              title="Flexbox"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
