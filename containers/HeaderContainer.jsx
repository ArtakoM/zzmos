import React from 'react';
import Header from '../components/Header'

const menu = [
  {
    name: 'HOME',
    id: 'first',
  },
  {
    name: 'PROFESSIONAL',
    id: 'second',
  },
  {
    name: 'EXPERIENCE',
    id: 'third',
  },
  {
    name: 'CONTACT',
    id: 'contact',
  },
];

const HeaderContainer = () => (
  <Header menu={menu} />
);

export default HeaderContainer;
