// @flow
import React from 'react';
import { Tab, Nav, Col } from '@windingtree/wt-ui-react';

import quotes from 'DATA/commons/InThePress/Quotes';

const Quotes = () => (
  <section className="mb-2">
    <Tab.Container id="quotes tabs" defaultActiveKey={quotes[0].name}>
      <Nav className="nav-pointers" variant="tabs">
        {quotes.map(quote => (
          <Nav.Item key={quote.name} as={Col} className="col-6 col-md-6 col-lg-3">
            <Nav.Link eventKey={quote.name} className="">
              <img
                className="img-fluid"
                src={quote.imgSrc}
                alt={quote.name}
                style={{
                  maxWidth: quote.imgWidth,
                  position: 'relative',
                  top: quote.imgTopPosition,
                }}
              />
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content className="px-2 py-3 bg-white">
        {quotes.map(quote => (
          <Tab.Pane key={quote.name} eventKey={quote.name}>
            <blockquote className="blockquote blockquote-alt">
              <p className="blockquote-body">
                {quote.text}
                <a href={quote.href} target="_blank" rel="noopener noreferrer">
                  Read full article
                </a>
              </p>
              {quote.user && <QuoteUser {...quote.user} />}
            </blockquote>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  </section>
);

type QuoteUserType = {name: string, role: string, imgSrc: string};
const QuoteUser = ({ name, role, imgSrc }: QuoteUserType) => (
  <footer className="blockquote-footer">
    <div className="user user-sm">
      <img className="user-img" src={imgSrc} width="60" height="60" alt={name} />
      <div className="user-data">
        <p className="user-name">{name}</p>
        <p className="user-role">{role}</p>
      </div>
    </div>
  </footer>
);

export default Quotes;
