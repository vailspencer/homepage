/* @flow */
import React from 'react';
import KeyBenefits from 'commons/KeyBenefits';
import HowItWorks from 'commons/HowItWorks';
import Hero from 'commons/Hero';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';

import Solutions from 'commons/Solutions';
import keyBenefitsDescriptions from './keyBenefits.json';

const Suppliers = () => (
  <div id="app-content">
    <Hero variant="suppliers" />
    <KeyBenefits>
      {keyBenefitsDescriptions.keyBenefits.map(benefit => (
        <KeyBenefits.Benefit
          title={benefit.title}
          img={benefit.icon}
          body={benefit.body}
          key={benefit.title}
        />))}
    </KeyBenefits>
    <HowItWorks />
    <Solutions variant="suppliers" />
    <SuscribeForUpdates />
    <ReadyToUse />

  </div>
);

export default Suppliers;
