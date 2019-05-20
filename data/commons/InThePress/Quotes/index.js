// @flow


type QuoteType = {
  name: string,
  text: string,
  href: string,
  imgSrc: string,
  imgWidth?: number,
  imgTopPosition?: number,
  user?: {
    name: string,
    role: string,
    imgSrc: string
  }
};

const quotes: QuoteType[] = [
  {
    name: 'airFrance',
    text: 'We are proud to be one of the first airline groups to join Winding Tree to develop Blockchain technology” said Sonia Barrière, EVP Strategy and Innovation at Air France-KLM.  “With a long-standing commitment to innovation with start-ups and partners, Air France-KLM is constantly creating the future of travel and devising solutions to make the travel experience easier and more personalized. With Blockchain technology, we aim to revolutionize exchanges within the travel industry for our customers, companies and start-ups...',
    href: 'https://www.airfranceklm.com/en/news/air-france-klm-partners-winding-tree-strengthen-innovation-travel-industry-using-blockchain',
    imgSrc: require('./img/airfranceklm.svg'),
    imgWidth: 180,
    imgTopPosition: -2,
  },
  {
    name: 'businessInsider',
    text: "It's very exciting, but very early. It's a simpler and cheaper distribution chain that can challenge the booking giants...",
    href: 'http://nordic.businessinsider.com/a-norwegian-hotel-billionaire-wants-to-use-blockchain-to-cut-out-expedia--/',
    imgSrc: require('./img/businessinsider.png'),
    imgWidth: 120,
    imgTopPosition: -5,
    user: {
      name: 'Lisa Farrar',
      role: 'Chief digital officer at Nordic Choice Hotels',
      imgSrc: require('./img/lisa-farrar.jpg'),
    },
  },
  {
    name: 'businesstravelnews',
    text: "Hobo Hotel Stockholm, a member of the Nordic Choice Hotels group, used Winding Tree to complete what the travel distribution platform claims is the first hotel booking on a public blockchain platform. Winding Tree said it's now ready for 'real-world usage of public blockchains.' Payments can be in the form of fiat currency, credit card or cryptocurrency in the form of ether or Winding Tree's Lif tokens.",
    href: 'https://www.businesstravelnews.com/Technology/Winding-Trees-Public-Blockchain-Platform-Ready-for-Hospitality-Bookings',
    imgSrc: require('./img/btn.png'),
    imgWidth: 150,
    imgTopPosition: -5,
  },
  {
    name: 'skift',
    text: 'What Lufthansa’s new partnership does is show how airlines and hotels might use the technology in the future to drastically reduce distribution costs. And although Lufthansa joins Air France-KLM in exploring what blockchain can do, Lufthansa has gone the furthest among airlines through its new agreement with Switzerland-based start-up Winding Tree....',
    href: 'https://skift.com/2017/10/10/lufthansa-partners-with-a-blockchain-provider-in-an-investment-worth-testing/',
    imgSrc: require('./img/skift.svg'),
    imgWidth: 90,
    imgTopPosition: -7,
  },
];

export default quotes;
