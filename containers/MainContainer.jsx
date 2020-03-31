import React from 'react';
import HeaderContainer from './HeaderContainer';
import FirstSection from '../components/FirstSection';
import SkillsContainer from './SkillsContainer';
import ExperienceContainer from './ExperienceContainer';
import PortfolioContainer from './PortfolioContainer';
import ContactFormContainer from './ContactFormContainer';

const MainContainer = () => (
  <React.Fragment>
    <div className="root">
      {/* <HeaderContainer /> */}
      {/* <FirstSection /> */}
      <SkillsContainer />
      {/* <ExperienceContainer /> */}
      {/* <PortfolioContainer /> */}
      {/* <ContactFormContainer /> */}
    </div>
    <style jsx>{`
      .root {
        background: rgb(0,0,0);
        background: linear-gradient(315deg, rgba(0,0,0,1) 0%, rgba(34,0,48,1) 100%);
      }
    `}</style>
  </React.Fragment>
);

export default MainContainer;
