import React from 'react';
import PropTypes from 'prop-types';

const ThirdSection = (props) => {
  const { experience, isMobile } = props;
  
  return (
    <React.Fragment>
      <section
        className="root"
        id="third"
      >
        <div className="experienceWrapper">
          <div className="titleWrapper">
            <p className="title">
              <span className="yellow">
                02
              </span> Experience
            </p>
          </div>
          <div className="experience">
            {
              experience.map((i, key) => {
                const className = key % 2 === 1 ? 'right' : 'left';
                return (
                  <div
                    key={i.id}
                    className="timeline"
                  >
                    <div className={className}>
                      <p className="duration gutter">
                        {i.duration}
                      </p>
                      <p  className="jobTitle">
                        {i.title}
                      </p>
                      <p className="vacancy gutter">
                        {i.vacancy}
                      </p>
                      <p
                        className="description gutter"
                        align={key % 2 === 1 ? 'left' : 'right'}
                      >
                        {i.description}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
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
        .experienceWrapper {
          flex: 0 0 65%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .titleWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 56px;
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
        }
        .text {
          text-transform: uppercase;
          font-family: lulo-clean, sans-serif;
          font-size: 20px;
          color: #ffffff;
        }
        .experience {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
        }
        .timeline {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 677px;
          max-width: 100%;
        }
        .left {
          width: calc(50% + 1px);
          align-self: flex-start;
          border-right: 2px solid #ffeb3b;
          box-sizing: border-box;
          padding: 24px;
          padding-bottom: 48px;
          padding-top: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          position: relative;
        }
        .left::after {
          content: ' ';
          width: 20px;
          height: 20px;
          background-color: #ffeb3b;
          position: absolute;
          right: -11px;
          border-radius: 50%;
        }
        .right {
          width: calc(50% + 1px);
          align-self: flex-end;
          border-left: 2px solid #ffeb3b;
          box-sizing: border-box;
          padding: 24px;
          padding-bottom: 48px;
          position: relative;
        }
        .right::before {
          content: ' ';
          width: 20px;
          height: 20px;
          background-color: #ffeb3b;
          position: absolute;
          left: -11px;
          border-radius: 50%;
        }
        .duration {
          color: #ffeb3b;
          font-weight: 900;
          font-size: 20px;
        }
        .jobTitle {
          color: #ffffff;
          font-size: 24px;
          padding-bottom: 16px;
        }
        .vacancy {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          padding-bottom: 16px;
        }
        .description {
          color: #ffffff;
          font-size: 16px;
          padding-bottom: 16px;
        }
        @media (max-width: 600px) {
          .titleWrapper {
            align-items: flex-start;
          }
          .title {
            font-size: 36px;
          }
          .yellow {
            font-size: 36px;
          }
          .timeline {
            width: unset;
          }
          .experienceWrapper {
            flex: 0 0 100%;
          }
        }
        @media (max-width: 450px) {
          .title {
            font-size: 24px;
          }
          .yellow {
            font-size: 24px;
          }
          .description {
            font-size: 12px;
          }
          .vacancy {
            font-size: 14px;
          }
          .jobTitle {
            font-size: 20px;
          }
          .duration {
            font-size: 14px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

ThirdSection.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) { // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent']; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }

  let isMobile = Boolean(userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ));
  
  return { isMobile };
}

ThirdSection.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ThirdSection;
