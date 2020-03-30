import React from 'react';
import PropTypes from 'prop-types';

const FourthSection = props => {
  const { portfolio } = props;

  const renderPortfolioItem = item => {
    return (
      <React.Fragment key={Math.random()}>
        <div
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundPosition: `${item.position.x} ${item.position.y}`,
          }}
          className="portfolioItem"
          onClick={() => {
            window.open(item.url, '_blank');
          }}
        >
          <div className="titleWrapper">
            <p className="projectTitle">
              {item.name}
            </p>
          </div>
        </div>
        <style jsx>{`
          .portfolioItem {
            width: 240px;
            height: 240px;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 50px;
          }
          .titleWrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all.6s;
            opacity: 0;
          }
          .titleWrapper:hover {
            opacity: 1;
          }
          .projectTitle {
            padding: 5px;
            font-size: 18px;
            color: #000;
            background-color: #ffeb3b;
            font-weight: 900;
            width: 100%;
            text-align: center;
          }
        `}</style>
      </React.Fragment>
    );
  };

  const renderPortfolio = () => {
    return portfolio.map(i => renderPortfolioItem(i));
  };

  return (
    <React.Fragment>
      <section
        className="root"
        id="portfolio"
      >
        <div className="portfolioWrapper">
          {renderPortfolio()}
        </div>
      </section>
      <style jsx>{`
        .root {
          min-height: 980px;
          height: 100%;
          position: relative;
          min-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 80px 0;
        }
        .portfolioWrapper {
          flex: 0 0 65%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          background-color: rgba(0,0,0,0.5);
          padding: 50px;
          padding-bottom: 0;
        }
      `}</style>
    </React.Fragment>
  );
};

FourthSection.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FourthSection;
