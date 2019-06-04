import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'features/Home';
import Foundation from 'features/Foundation';
import Sellers from 'features/Sellers';
import Suppliers from 'features/Suppliers';
import SoftwareVendors from 'features/SoftwareVendors';
import MainTemplate from 'features/MainTemplate';
import Community from 'features/StartupsAndDevelopers';
import Page404 from 'features/Page404';
import HacktravelLisbon2019 from 'features/HacktravelLisbon2019';
import ScrollHandler from './ScrollHandler';
import HacktravelProgram from '../features/HacktravelProgram';

const Routes = () => (
  <ScrollHandler>
    <MainTemplate>
      <Switch>
        <Route path={['/foundation', '/foundation.html']} component={Foundation} />
        <Route path={['/suppliers', '/suppliers.html']} component={Suppliers} />
        <Route path={['/sellers', '/sellers.html']} component={Sellers} />
        <Route path={['/software-vendors', '/software-vendors.html']} component={SoftwareVendors} />
        <Route path={['/startups-and-developers', '/startups-and-developers.html']} component={Community} />
        <Route path={['/hacktravel-Lisbon-2019', '/hacktravel-Lisbon-2019.html']} component={HacktravelLisbon2019} />
        <Route path={['/hacktravelprogram', '/program.html']} component={HacktravelProgram} />
        <Route path="/" exact component={Home} />
        <Route component={Page404} />
      </Switch>
    </MainTemplate>
  </ScrollHandler>
);


export default Routes;
