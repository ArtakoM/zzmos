import React from 'react';
import ThirdSection from '../components/ThirdSection'

const experience = [
  {
    id: 3,
    title: 'Dark Mirror',
    vacancy: 'Web/Mobile Developer',
    duration: '2018 October - Present',
    description: 'In a Dark Mirror, my main work is to create user interfaces using React.js, add for them required functionality and implement REST API.',
  },
  {
    id: 2,
    title: 'TransUp',
    vacancy: 'Web Developer',
    duration: '2018 September - 2018 October',
    description: 'In a Transup, I\'ve worked with Google Maps API using React.js.',
  },
  {
    id: 1,
    title: 'SimpleGant',
    vacancy: 'Web Developer',
    duration: '2017 June - 2018 September',
    description: 'In a SimpleGant, I was mostly working with MERN stack.',
  },
  {
    id: 0,
    title: 'NPUA',
    vacancy: 'Technical specialist',
    duration: '2016 February - 2017 April',
    description: 'At the National Polytechnic University of Armenia, I worked with the team to solve any computer problems that arose.',
  },
];

const ExperienceContainer = () => (
  <ThirdSection experience={experience} />
);

export default ExperienceContainer;
