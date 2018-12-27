// @flow
import React from 'react';
import {
  Container,
} from '@windingtree/wt-ui-react';
import VideoGallery from 'commons/VideoGallery';
import LifToken from './LifToken';
import Partners from './Partners';
import InThePress from './InThePress';
import DesignedFor from './DesignedFor';
import Features from './Features';

const Home = () => (
  <Container className="app-content">
    <Features />
    <LifToken />
    <Partners />
    <InThePress />
    <DesignedFor />
    <VideoGallery />
  </Container>
);

export default Home;
