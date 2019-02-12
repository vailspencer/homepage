/* @flow */

type InfoType = {
  title: string,
  text: string,
  primaryButtonHref?: string,
  primaryButtonLabel?: string,
  SecondaryButtonHref?: string,
  SecondaryButtonLabel?: string,
  videoSrc?: string,
  imgSrc: string
};

type DataType = {
  foundation: InfoType,
  hackTravel: InfoType,
  lifToken: InfoType,
  sellers: InfoType,
  softwareVendors: InfoType,
  startupsAndDevelopers: InfoType,
  suppliers: InfoType
};

const data: DataType = {
  foundation: {
    title: 'Winding Tree Foundation',
    text: 'A non-profit organization',
    imgSrc: require('./img/foundation-hero.svg'),
  },
  hackTravel: {
    title: 'Hack Travel',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna nec augue condimentum volutpat. Suspendisse nec augue erat.',
    primaryButtonHref: '#',
    primaryButtonLabel: 'Primary button',
    SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',
    imgSrc: 'mdi-bitcoin',
  },
  lifToken: {
    title: 'Lif Token',
    text: 'The Líf token facilitates transactions on the Winding Tree platform.',
    primaryButtonHref: 'https://github.com/windingtree/lif-token',
    primaryButtonLabel: 'Read docs',
    SecondaryButtonLabel: 'Watch Video',
    imgSrc: require('./img/lif-token-hero.svg'),
    videoSrc: '_qer1qd68eQ',
  },
  sellers: {
    title: 'An entry point to travel inventory',
    text: 'An open-source technology that gives sellers a commission-free access to thousands of hotels, airlines, cruises and other travel services worldwide.',
    primaryButtonHref: 'https://goo.gl/o7WP6R',
    primaryButtonLabel: 'Apply for integration',
    SecondaryButtonLabel: 'Watch Video',
    imgSrc: require('./img/sellers-hero.svg'),
    videoSrc: '_qer1qd68eQ',
  },
  softwareVendors: {
    title: 'Deliver more value with your product',
    text: 'Make your product utilize Winding Tree Platform features and increase its value for users',
    primaryButtonHref: 'https://goo.gl/o7WP6R',
    primaryButtonLabel: 'Integrate',
    SecondaryButtonLabel: 'Watch Video',
    imgSrc: require('./img/software-vendors-hero.svg'),
    videoSrc: '_qer1qd68eQ',
  },
  startupsAndDevelopers: {
    title: 'Make future of travel together',
    text: 'Developers, startups, evangelists and geeks are welcome!',
    primaryButtonHref: 'https://github.com/windingtree',
    primaryButtonLabel: 'Github',
    imgSrc: require('./img/startups-and-developers-hero.svg'),
  },
  suppliers: {
    title: 'New profitable distribution channel',
    text: 'Deliver your inventory to sellers with new open-source and commision-free channel',
    primaryButtonHref: 'https://goo.gl/o7WP6R',
    primaryButtonLabel: 'Apply for integration',
    SecondaryButtonLabel: 'Watch Video',
    imgSrc: require('./img/suppliers-hero.svg'),
    videoSrc: '_qer1qd68eQ',

  },
};

export default data;