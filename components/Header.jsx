import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/WorkOutline';
import ContactIcon from '@material-ui/icons/ContactMail';
import WidgetsIcon from '@material-ui/icons/Widgets';
import { scroller } from 'react-scroll';

const Header = props => {
  const { menu } = props;

  const goTo = id => {
    scroller.scrollTo(id, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  const renderIcon = name => {
    switch (name) {
      case 'HOME':
        return <HomeIcon style={{ fontSize: 36 }} />;
      case 'PROFESSIONAL':
        return <CodeIcon style={{ fontSize: 36 }} />;
      case 'EXPERIENCE':
        return <WorkIcon style={{ fontSize: 36 }} />;
      case 'PORTFOLIO':
        return <WidgetsIcon style={{ fontSize: 36 }} />;
      case 'CONTACT':
        return <ContactIcon style={{ fontSize: 36 }} />;
      default:
        return <HomeIcon style={{ fontSize: 36 }} />;
    }
  };

  return (
    <React.Fragment>
      <nav className="root">
        <div className="content">
          <div className="menuWrapper">
            <ul className="menu">
              {
                menu.map(i => (
                  <li
                    key={i.name}
                    className="menuItem"
                    onClick={() => goTo(i.id)}
                  >
                    {renderIcon(i.name)}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .root {
          height: 100vh;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          position: fixed;
          z-index: 1;
          right: 0;
        }
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .menu {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .menuItem {
          background-color: #000;
          color: #ffeb3b;
          opacity:  0.7;
          width: 70px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px;
          cursor: pointer;
          transition: all.6s;
        }
        .menuItem:hover {
          background-color: #ffeb3b;
          color: #000;
        }
        .icon {
          position: absolute;
          font-weight: bold;
          font-size: 36px;
        }
      `}</style>
    </React.Fragment>
  );
};

Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Header;
