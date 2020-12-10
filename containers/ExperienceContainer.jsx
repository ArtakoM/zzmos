import React from 'react';
import ThirdSection from '../components/ThirdSection'

const experience = [
  {
    id: 7,
    title: 'Perigon Group',
    vacancy: 'Lead Frontend Developer',
    duration: '2020 Jul - Present',
    description: 'In a Perigon Group I\'m leading front end team',
  },
  {
    id: 6,
    title: 'IQ.Academy',
    vacancy: 'Frontend Developer',
    duration: '2020 Sep - Present',
    description: 'In a IQ.Academy I\'m main front end developer',
  },
  {
    id: 5,
    title: 'SVOI',
    vacancy: 'Frontend Developer',
    duration: '2020 Nov - Present',
    description: 'In a SVOI CLUB I\'m main front end developer',
  },
  {
    id: 4,
    title: 'Polehin.com',
    vacancy: 'Web Developer',
    duration: '2019 Jul - 2020 May',
    description: 'Bitcoin Wallet was created in 2018 with the goal of making cryptocurrencies accessible and understandable for a wider range of users.',
  },
  {
    id: 3,
    title: 'Dark Mirror',
    vacancy: 'Web/Mobile Developer',
    duration: '2018 Oct - 2019 Jul',
    description: 'In a Dark Mirror, my main work is to create user interfaces using React.js, add for them required functionality and implement REST API.',
  },
  {
    id: 2,
    title: 'TransUp',
    vacancy: 'Web Developer',
    duration: '2018 Sep - 2018 Oct',
    description: 'In a Transup, I\'ve worked with Google Maps API using React.js.',
  },
  {
    id: 1,
    title: 'SimpleGant',
    vacancy: 'Web Developer',
    duration: '2017 Jun - 2018 Sep',
    description: 'In a SimpleGant, I was mostly working with MERN stack.',
  },
  {
    id: 0,
    title: 'NPUA',
    vacancy: 'Technical specialist',
    duration: '2016 Feb - 2017 Apr',
    description: 'At the National Polytechnic University of Armenia, I worked with the team to solve any computer problems that arose.',
  },
];

const ExperienceContainer = () => (
  <ThirdSection experience={experience} />
);

export default ExperienceContainer;
