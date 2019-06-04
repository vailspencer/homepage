// @flow
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Category from './Category';

const Gallery = (props: *) => {
  const { sections } = props;
  return (
    <Container>
      <Row>
        {sections.map(section => (
          <Col md={6} key={section.name}>
            <Category
              thumbnail={section.imgSrc}
              title={section.name}
              text="Watch all videos"
              href={section.href}
              videoSrc={section.videoSrc}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
