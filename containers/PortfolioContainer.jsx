import React from 'react';
import FourthSection from '../components/FourthSection';

const portfolio = [
  {
    name: 'Bitcoin Wallet',
    url: 'http://polehin.com/',
    img: '/resources/images/polehin.png',
    position: {
      x: 'center',
      y: 'center',
    },
  },
  {
    name: 'Refferal Spark',
    url: 'http://referral-spark-landing.surge.sh/',
    img: '/resources/images/rfs.png',
    position: {
      x: 'left',
      y: 'top',
    },
  },
  {
    name: 'Transup',
    url: 'https://transup.am/',
    img: '/resources/images/transup.png',
    position: {
      x: 'center',
      y: 'top',
    },
  },
  {
    name: 'FazWaz',
    url: 'https://www.fazwaz.com/ru',
    img: '/resources/images/fazway.png',
    position: {
      x: 'center',
      y: 'top',
    },
  },
  {
    name: 'Portloads',
    url: 'http://www.portloads.com/',
    img: '/resources/images/portloads.png',
    position: {
      x: 'left',
      y: 'top',
    },
  },
  {
    name: 'Sell or Checkout',
    url: 'https://www.sellorcheckout.com/',
    img: '/resources/images/sellorcheckout.png',
    position: {
      x: 'right',
      y: 'top',
    },
  },
  {
    name: 'Lukay Music',
    url: 'http://www.lukaymusic.com/',
    img: '/resources/images/lukay.png',
    position: {
      x: 'center',
      y: 'top',
    },
  },
  {
    name: 'Cellcom',
    url: 'http://www.cellcom.ca/fr',
    img: '/resources/images/cellcom.png',
    position: {
      x: 'center',
      y: 'top',
    },
  },
  {
    name: 'Coinbank',
    url: 'http://coinbank.com/',
    img: '/resources/images/coinbank.png',
    position: {
      x: 'center',
      y: 'center',
    },
  },
];

export default () => (
  <FourthSection portfolio={portfolio} />
);
