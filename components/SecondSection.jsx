import React from 'react';
import PropTypes from 'prop-types';

const SecondSection = (props) => {
  const { skills } = props;

  return (
    <React.Fragment>
      <section
        className="root"
        id="second"
      >
        <div className="skillsWrapper">
          <div className="titleWrapper">
            <p className="title">
              <span className="yellow">
                01
              </span> Professional
            </p>
            <p className="text">
              MY KNOWLEDGE LEVEL IN SOFTWARE
            </p>
          </div>
          <div className="skills">
          {skills.map(i => {
            return (
              <div
                key={i.name}
                className="skillWrapper"
              >
                <div className="skillNameWrapper">
                  <p className="skillText">
                    {i.name}
                  </p>
                </div>
                <div className="skillLevelWrapper">
                  <div
                    className="skillLevel"
                    style={{
                      width: `calc(${i.level}% - 80px)`,
                    }}
                  >:)</div>
                  <span className="skillText">{i.level}%</span>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </section>
      <style jsx>{`
        {
          .root {
            min-height: 980px;
            height: 100vh;
            position: relative;
            min-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .skillsWrapper {
            flex: 0 0 65%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .titleWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .title {
            text-transform: uppercase;
            font-family: lulo-clean, sans-serif;
            font-size: 42px;
            color: #ffffff;
            font-weight: 900;
          }
          .yellow {
            color: #ffeb3b;
            font-size: 42px;
          }
          .text {
            text-transform: uppercase;
            font-family: "lulo-clean", sans-serif;
            font-size: 20px;
            color: #ffffff;
          }
          .skills {
            display: flex;
            width: 100%;
            flex-direction: column;
            margin-top: 30px;
          }
          .skillWrapper {
            display: flex;
            margin: 8px 0px;
          }
          .skillNameWrapper {
            flex: 0 0 20%;
            display: flex;
            justify-content: flex-end;
          },
          .skillText {
            font-size: 18px;
            text-transform: uppercase;
            color: #ffffff;
          }
          .skillLevelWrapper {
            flex: 0 0 80%;
            display: flex;
            justify-content: space-between;
            padding: 0 16px;
          }
          .skillLevel {
            color: transparent;
            background-color: #ffeb3b;
            height: 65%;
            width: 0;
          }
          @media (max-width: 600px) {
            .skillsWrapper {
              flex: 0 0 90%;
            }
            .titleWrapper {
              align-items: flex-start;
            }
            .title {
              font-size: 90%;
            }
            .yellow {
              font-size: 90%;
            }
            .text {
              font-size: 40%;
            }
            .skillText {
              font-size: 12px;
            }
            .skillLevel {
              height: 50%;
            }
          }
          @media (max-width: 460px) {
            .skillText {
              font-size: 8px;
            }
            .skillLevel {
              height: 40%;
            }
          }
        }
      `}</style>
    </React.Fragment>  
  );
};

SecondSection.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SecondSection;
