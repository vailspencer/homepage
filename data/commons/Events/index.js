/* @flow */
/* eslint-disable global-require */
import type { EventsType } from 'commons/Events/types';

const events: EventsType = {
  upcoming: [
    {
      startDate: '3-5',
      startMonth: "Jul'19",
      name: '#HackTravel 2019',
      location: 'Lisbon, Portugal',
      imgSrc: require('./img/hacktravel.png'),
      text: '#HackTravel hackathon is a unique opportunity for the most forward thinking travel industry players to come together and collaboratively tackle real world industry pain points.',
      buttonHref: '/hacktravel-lisbon-2019',
      buttonText: 'join hackathon',
    },
  ],
  past: [
    {
      startDate: '4-5',
      startMonth: "Apr'19",
      name: 'Travel, Transportation and Hospitality Americas Symposium 2019',
      location: 'New York, USA',
      imgSrc: require('./img/tcs.png'),
      text: 'TCS is organizing a Startup Summit where some of our clients and prospects will showcase their digital solutions around block chain, biometrics, augmented reality, and video analytics. Various subject matter experts and business analysts would also be available at the event to share their viewpoints on the emerging digital technologies across these industries.',
      buttonHref: 'https://www.tcs.com/travel-transportation-hospitality-symposium-americas-2019',
      buttonText: 'check event',
    },
    {
      startDate: '4-5',
      startMonth: "Apr'19",
      name: 'New Baltic Hospitality Forum',
      location: 'Tallin, Estonia',
      imgSrc: require('./img/nbhf.png'),
      text: 'A conference that will be shaping the future of the Baltic regional hospitality market.',
      buttonHref: 'https://newbaltichospitality.com/',
      buttonText: 'check event',
    },
    {
      startDate: '2-4',
      startMonth: "Apr'19",
      name: 'ZurichPlUs 2019',
      location: 'Zurich, Germany',
      imgSrc: require('./img/plus.png'),
      text: 'We all participate on the established travel conference circuit but know heart of hearts that it is not all that effective for engaging and having meaningful discussions with other thought leaders in our complex and ever changing industry.  The PLUs Forum (People Like Us) aims to provide a dynamic framework for meaningful and memorable interactions.',
      buttonHref: 'https://www.the-plus-forum.org/',
      buttonText: 'check event',
    },
    {
      startDate: '2-3',
      startMonth: "Apr'19",
      name: '2nd Future Blockchain Summit',
      location: 'Dubai, UAE',
      imgSrc: require('./img/fbs.jpg'),
      text: "The second edition of the Future Blockchain Summit, the world's largest blockchain festival brings to the forefront government visionaries, blockchain revolutionists, startups, investors and the brightest disruptors to marry business sense with opportunity and set the global blockchain agenda.",
      buttonHref: 'https://www.futureblockchainsummit.com/',
      buttonText: 'check event',
    },
    {
      startDate: '22',
      startMonth: "Mar'19",
      name: 'BlockchainUA',
      location: 'Kyiv, Ukraine',
      imgSrc: require('./img/bua.png'),
      text: 'The BlockchainUA conference is aimed at a wide audience and aims to raise awareness of participants about blockchain technology and decentralized technologies, to build a strong community, and also to integrate Ukraine into the international community.',
      buttonHref: 'https://blockchainua.com/en',
      buttonText: 'check event',
    },
    {
      startDate: '21-22',
      startMonth: "Mar'19",
      name: 'BTO11',
      location: 'Florence, Italy',
      imgSrc: require('./img/bto.png'),
      text: 'It can be defined as an “event-conference” (whilst also being an expo, a seminar, a debate, entertainment and much more) with a schedule replete with organised events – in 2017 alone, there were 160 – over two days dedicated to operators within the long chain of tourism, and not only receptive, to those responsible for governing tourism throughout the territories, stakeholders and communities, those engaged in the marketing and distribution of tourism products, along with all who study, teach and undertake research.',
      buttonHref: 'https://www.buytourismonline.com/?lang=en',
      buttonText: 'check event',
    },
    {
      startDate: '14',
      startMonth: "Mar'19",
      name: 'RE2019 | The Netherlands Business Travel Conference',
      location: 'Amsterdam, The Netherlands',
      imgSrc: require('./img/re.png'),
      text: 'RE is one event of its kind. It is different from any other industry event. Because RE is where innovation meets real business need. RE is where conflict is good. RE is where we celebrate the benefits of frictions because this is what drives our industry forward. ‘RE’ is where you will be immersed in a creative (and unexpected) environment. RE is where you will look closely at the components of the business travel ecosystem and consider the changes that have happened and those yet to come.',
      buttonHref: 'https://app.azavista.com/event_website_pages/view/home/5c0e9337-1fa4-4e18-8bf6-48540af00018/ecd04a7cac',
      buttonText: 'check event',
    },
    {
      startDate: '21',
      endDate: '22',
      startMonth: "Feb'19",
      name: 'Hamburg Aviation Conference',
      location: 'Hamburg, Germany',
      text: 'Welcome to the other kind of event - the reference for innovation in aviation & travel: innovative, impactful, personal, independent, authentic. 21 - 22 February 2019, Ameron Hotel Speicherstadt, Hamburg, Germany',
      imgSrc: require('./img/hamburg.png'),
      buttonHref: 'https://www.hamburgaviationconference.com/',
      buttonText: 'check event',
    },
    {
      startDate: '29',
      endDate: '30',
      startMonth: "Jan'19",
      name: "Aracon",
      location: 'Berlin, Germany',
      text: "The Aragon Conference brings together people who embody and wish to shape the Aragon community. Those who are building and supporting the pseudonymous, secure, trustless future — the decentralized web. Decentralized governance and DAOs are at the heart of the new Web 3.0. They are key components in moving towards a more fair and open world for everyone. By concentrating on a few themes, we can provide much deeper and thorough presentations on these topics.",
      imgSrc: require('./img/aracon.jpg'),
    },
    {
      startDate: '21',
      endDate: '22',
      startMonth: "Nov'18",
      name: "CAPA's World Aviation Summit",
      location: 'Berlin, Germany',
      imgSrc: require('./img/capa.png'),
    },
    {
      startDate: '30',
      endDate: '2',
      startMonth: 'Oct',
      endMonth: "Nov'18",
      name: 'Ethereum DevCon',
      location: 'Prague, Czech Republic',
      imgSrc: require('./img/devcon.png'),
    },
    {
      startDate: '26',
      endDate: '28',
      startMonth: "Oct'18",
      name: '#CryptoLife Hackathon',
      location: 'Prague, Czech Republic',
      imgSrc: require('./img/status.jpg'),
    },
    {
      startDate: '18',
      endDate: '19',
      startMonth: "Oct'18",
      name: 'EyeforTravel North America 2018',
      location: 'Las Vegas, USA',
      imgSrc: require('./img/eyefortravel.png'),
    },
    {
      startDate: '3',
      startMonth: "Oct'18",
      name: 'The Hotel Distribution Event 2018',
      location: 'London, UK',
      imgSrc: require('./img/HDE-2018.jpg'),
    },
    {
      startDate: '20',
      startMonth: "Sep'18",
      name: 'Back To The Hospitality Future Summit',
      location: 'London, UK',
      imgSrc: require('./img/mews.png'),
    },
    {
      startDate: '6',
      endDate: '7',
      startMonth: "Sep'18",
      name: 'Skolkovo Tourism 2018',
      location: 'Moscow, Russia',
      imgSrc: require('./img/sk.png'),
    },
    {
      startDate: '24',
      endDate: '26',
      startMonth: "Jul'18",
      name: 'HTNG Asia-Pacific Conference',
      location: 'Macau, China',
      imgSrc: require('./img/HTNG.png'),
    },
    {
      startDate: '19',
      endDate: '21',
      startMonth: "Jun'18",
      name: 'IATA Aviation Data Symposium & AI Lab',
      location: 'Berlin, Germany',
      imgSrc: require('./img/iata-as.png'),
    },
    {
      startDate: '15',
      endDate: '17',
      startMonth: "May'18",
      name: 'Phocuswright Europe',
      location: 'Amsterdam, The Netherlands',
      imgSrc: require('./img/phocus.jpg'),
    },
  ],
  own: [
    {
      startDate: '3-5',
      startMonth: "Jul'19",
      name: '#HackTravel 2019',
      location: 'Lisbon, Portugal',
      imgSrc: require('./img/hacktravel.png'),
      text: '#HackTravel hackathon is a unique opportunity for the most forward thinking travel industry players to come together and collaboratively tackle real world industry pain points.',
      buttonHref: '/hacktravel-lisbon-2019',
      buttonText: 'join hackathon',
    },
    {
      startDate: '24',
      endDate: '25',
      startMonth: "Oct'18",
      name: 'HackTravel Prague',
      location: 'Prague, Czech Republic',
      imgSrc: require('./img/hacktravel2018.png'),
      text: 'The hackathon, which was the first of its kind, brought together various airlines, travel companies, and blockchain developers coding solutions collaboratively using Winding Tree’s open source platform.',
      buttonHref: 'https://blog.windingtree.com/hacktravel-hackathon-recap-feacb65cc47d',
      buttonText: 'recap',

    },
    {
      startDate: '7',
      endDate: '8',
      startMonth: "Jun'18",
      name: 'TravelTechCon 2018',
      location: 'San Francisco, CA',
      imgSrc: require('./img/ttc2018.png'),
      text: 'Travel Tech Con is The Only Independent Travel Technology Conference for Startups and Engineers',
      buttonHref: 'https://www.traveltechcon.com/conference-recap/',
      buttonText: 'recap',
    },
  ],
};

export default events;
