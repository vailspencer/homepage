/* @flow */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container, Row, Col, Button, Image,
} from '@windingtree/wt-ui-react';
import VideoModal from 'commons/VideoModal';
import data from './data';

type PropsType = {
  variant: 'foundation' | 'hackTravel' | 'lifToken' | 'sellers' | 'softwareVendors' | 'startupsAndDevelopers' | 'suppliers'
};

type StateType = {
  showModal: boolean
};

class Hero extends React.Component<PropsType, StateType> {
  state = { showModal: false };

  hanldeOnClick = (e: SyntheticMouseEvent<*>) => {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { variant } = this.props;
    const { showModal } = this.state;
    const heroData = data[variant];
    return (
      <article className="app-section section-hero pt-1 pt-md-2">
        {heroData.videoSrc && (
        <VideoModal
          show={showModal}
          videoSrc={heroData.videoSrc}
          onHide={this.hideModal}
          title={heroData.title}
        />)}
        <Container>
          <Row className="align-items-center flex-column flex-md-row-reverse justify-content-md-between" flex>

            <Col md={4} className="text-center text-md-right">
              <Image fluid src={heroData.imgSrc} className="mb-1 mb-md-0 hero-icon" />
            </Col>

            <Col md={7} className="text-center text-md-left">
              <h1 className="text-white">{heroData.title}</h1>
              <p className="lead text-white text-sm-lg mb-0">{heroData.text}</p>
              { heroData.primaryButtonHref && heroData.primaryButtonLabel && (
                heroData.primaryButtonHref.startsWith('http')
                  ? (
                    <Button variant="primary" className="mt-1" href={heroData.primaryButtonHref}>
                      {heroData.primaryButtonLabel}
                    </Button>
                  )
                  : (
                    <LinkContainer to={heroData.primaryButtonHref}>
                      <Button variant="primary" className="mt-1" target="_blank">
                        {heroData.primaryButtonLabel}
                      </Button>
                    </LinkContainer>
                  ))}
              { heroData.SecondaryButtonHref && heroData.SecondaryButtonLabel && (
              <LinkContainer to={heroData.SecondaryButtonHref}>
                <Button outlined variant="light" className="mt-1" target="_blank">{heroData.SecondaryButtonLabel}</Button>
              </LinkContainer>
              )}
              { heroData.SecondaryButtonLabel && heroData.videoSrc && <Button outlined variant="light ml-sm-1 ml-md-0 ml-lg-1 " className="mt-1" onClick={this.hanldeOnClick}>{heroData.SecondaryButtonLabel}</Button> }
            </Col>

          </Row>
        </Container>
      </article>
    );
  }
}

export default Hero;