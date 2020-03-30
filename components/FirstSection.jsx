import React from 'react';

const FirstSection = () => {
  return (
    <React.Fragment>
      <section
        className="root"
        id="first"
      >
        <div className="wrapper">
          <div className="me">
            <p className="text">
              I
              <span className="yellow">'</span>
              m
            </p>
            <p className="text">
              Artak
            </p>
            <p className="text gutter">
              Mosinyan
              <span className="yellow">.</span>
            </p>
            <p className="position">
              Web & Mobile Developer
            </p>
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
          }
          .wrapper {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .me {
            flex: 0 0 50%;
          }
          .text {
            text-transform: uppercase;
            font-family: "lulo-clean", sans-serif;
            font-size: 64px;
            color: #ffffff;
            font-weight: 900;
          }
          .yellow {
            color: #ffeb3b
          }
          @keyframes typing {
            from { width: 0 };
            to { width: 280px };
          }
          @keyframes blink-caret {
            from { border-color: transparent; }
            to { border-color: transparent; }
            50% { border-color: #ffeb3b; }
          }
          .position {
            display: inline-block;
            font-size: 24px;
            color: #ffffff;
            overflow: hidden;
            border-right: .15em solid #ffeb3b;
            white-space: nowrap;
            letter-spacing: .15em;
            animation: typing 1.8s steps(30, end), blink-caret .75s step-end infinite;
            margin: 0 auto;
          }
          .gutter {
            margin-bottom: 0.35em;
          }
        }
      `}</style>

    </React.Fragment>
  );
};

export default FirstSection;
