import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css';
const SingleBlog = ({ blog }) => {
  const { img, title, details } = blog;
  return (
    <Card
      className='p-4 cardStyle'
      data-aos='fade-up'
      data-aos-duration='700'
      data-aos-delay='600'>
      <Card.Img variant='top' src={img} />
      <Card.Body className='p-0 mt-4'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <a href="https://medium.com/" className="externalLink" target='blank'>
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Explore
          </a>
      </Card.Body>
    </Card>
  );
};

export default SingleBlog;
