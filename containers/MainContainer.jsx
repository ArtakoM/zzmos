import React from 'react';
import HeaderContainer from './HeaderContainer';
import FirstSection from '../components/FirstSection';
import SkillsContainer from './SkillsContainer';
import ExperienceContainer from './ExperienceContainer';
import PortfolioContainer from './PortfolioContainer';
import ContactFormContainer from './ContactFormContainer';

const MainContainer = () => (
  <React.Fragment>
    <HeaderContainer />
    <FirstSection />
    <SkillsContainer />
    <ExperienceContainer />
    <PortfolioContainer />
    <ContactFormContainer />
  </React.Fragment>
);

export default MainContainer;
