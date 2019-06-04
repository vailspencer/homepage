// @flow
import React from 'react';
import Tile from 'commons/Card';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import projectList from 'DATA/commons/BuiltByCommunity'; // only for default props
import ScrollableAnchor from 'react-scrollable-anchor';


const BuiltByCommunity = (props: *) => {
  const { id, data } = props;

  return (

    <ScrollableAnchor id={id}>
      <article className="app-section section-community border-top border-bottom border-light">
        <Container>
          <header className="mb-2 mb-md-4 text-center">
            <h2>{data.header}</h2>
          </header>

          <Row className="justify-content-center">
            <Col xs={11} sm={12} md={10} lg={8}>
              <div className="card-deck">
                {data.projects.map((project, index) => (
                  <React.Fragment key={project.title}>
                    <Tile
                      imgSrc={project.imgSrc}
                      imgWidth={project.imgWidth}
                      title={project.title}
                      text={project.text}
                      href={project.href}
                    />
                    {((index % 2 !== 0) && (index < projectList.length - 1))
                      ? <div className="d-none d-sm-block w-100 mb-2" />
                      : null
                            }
                  </React.Fragment>
                ))
                      }
              </div>
            </Col>
          </Row>

        </Container>
      </article>
    </ScrollableAnchor>
  );
};

BuiltByCommunity.defaultProps = {
  id: 'community-projects',
  data: {
    header: 'Built By Community',
    projects: projectList,
  },
};

export default BuiltByCommunity;
