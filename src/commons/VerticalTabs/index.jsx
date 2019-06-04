// @flow
import React from 'react';
import {
  Tab, Row, Col, Nav, Image, Container, Button,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';


const VerticalTabs = (props: *) => {
  const { id, data } = props;

  return (
    <ScrollableAnchor id={id}>

      <article className="app-section section-features pt-2 pt-lg-3">
        <Container>
          <header className="mb-2 mb-md-4 text-center d-none d-lg-block">
            <h2>{data.header}</h2>
          </header>
          <Row className="justify-content-md-center align-items-center">
            <Col sm={12} md={10}>

              <div className="d-none d-lg-block">
                <Tab.Container id="features-tabs" defaultActiveKey={data.items[0].name}>
                  <Row className="mb-2">
                    <Col md={6} lg={4}>
                      <Nav className="flex-column mb-1 border-right">
                        {data.items.map(({ name }) => (
                          <Nav.Item className="d-block" key={name}>
                            <p>
                              <Nav.Link as="button" className="text-link" eventKey={name}>{name}</Nav.Link>
                            </p>
                          </Nav.Item>
                        ))}
                      </Nav>
                    </Col>
                    <Col md={6} lg={8}>
                      <Tab.Content>
                        {data.items.map(({
                          name, text, imgSrc, link,
                        }) => (
                          <Tab.Pane eventKey={name} key={name}>
                            <article className="feature text-center" style={{ display: 'block', marginTop: -20 }}>
                              <Image src={imgSrc} alt="icon" className="mt-1 mt-md-0 mb-1" width="90" height="90" />
                              <h3 className="mb-1 text-muted">{name}</h3>
                              <p>{text}</p>
                              {
                                    link && (
                                      <footer className="mt-1">
                                        <a href={link.href} className="border-bottom" target="_blank" rel="noopener noreferrer">
                                          {link.text}
                                        </a>
                                      </footer>
                                    )}
                            </article>
                          </Tab.Pane>
                        ))}
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>

              <div className="d-md-none">
                <Col md={6} lg={8}>
                  <div>
                    {data.items.map(({
                      name, text, imgSrc, link,
                    }) => (
                      <article className="feature text-center pb-2" style={{ display: 'block', marginTop: -20 }} key={name}>
                        <Image src={imgSrc} alt="icon" className="mt-1 mt-md-0 mb-1" width="90" height="90" />
                        <h3 className="mb-1 text-muted">{name}</h3>
                        <p>{text}</p>
                        {
                              link && (
                                <footer className="mt-1">
                                  <a href={link.href} className="border-bottom">
                                    {link.text}
                                  </a>
                                </footer>
                              )}
                      </article>
                    ))}
                  </div>
                </Col>
              </div>


              <footer className="text-center">
                <Button href={data.mainCTAUrl} target="_blank" variant="dark" outlined>
                  {data.mainCTALabel}
                </Button>
              </footer>
            </Col>
          </Row>
        </Container>
      </article>
    </ScrollableAnchor>
  );
};

export default VerticalTabs;
