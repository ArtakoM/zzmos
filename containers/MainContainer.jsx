import React from 'react';
import HeaderContainer from './HeaderContainer';
import FirstSection from '../components/FirstSection';
import SkillsContainer from './SkillsContainer';
import ExperienceContainer from './ExperienceContainer';
import ContactFormContainer from './ContactFormContainer';

const MainContainer = () => (
  <React.Fragment>
    <div className="root">
      <HeaderContainer />
      <FirstSection />
      <SkillsContainer />
      <ExperienceContainer />
      <ContactFormContainer />
    </div>
    <style jsx>{`
      .root {
        background-color: #FF3CAC;
        background-image: linear-gradient(75deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
      }
    `}</style>
  </React.Fragment>
);

export default MainContainer;
