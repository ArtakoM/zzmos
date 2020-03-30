import React from 'react';
import SecondSection from '../components/SecondSection'

const skills = [
  {
    name: 'React.js',
    level: 90,
  },
  {
    name: 'html5',
    level: 95,
  },
  {
    name: 'css3',
    level: 100,
  },
  {
    name: 'nodejs',
    level: 80,
  },
  {
    name: 'React Native',
    level: 70,
  },
  {
    name: 'Mysql',
    level: 75,
  },
  {
    name: 'MongoDB',
    level: 75,
  },
];

const SkillsContainer = () => (
  <SecondSection skills={skills} />
);

export default SkillsContainer;
