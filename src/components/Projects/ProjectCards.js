import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="text-left">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Title className="text-left">{props.tech}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.techdesc}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <Button className="ml-3" variant="primary" href={props.live} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "" : "Live"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;