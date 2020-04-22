import React from 'react';
import PropTypes from 'prop-types';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTelegramPlane,
} from 'react-icons/fa';

const ContactForm = ({
  name,
  email,
  phone,
  message,
  setName,
  setEmail,
  setPhone,
  setMessage,
  onSend,
  button,
 }) => (
  <>
    <section
      id="contact"
      className="root"
    >
      <div className="formWrapper">
        <div className="about">
          <p className="title">
            Contact
          </p>
          <div className="socialWrapper">
            <a
              href="https://www.facebook.com/artako.mosinyan"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/zz_mos/"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/artak-mosinyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/Im_Tako_"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <FaTwitter />
            </a>
            <a
              href="http://t.me/Artako98"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <FaTelegramPlane />
            </a>
          </div>
          <p className="text">
            Email:
            <a
              href="mailto:artakom98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="email"
            >
              artakom98@gmail.com
            </a>
          </p>
          <p className="text">
            Tel: <span className="number">+37443455440</span>
          </p>
        </div>
        <form id="form" className="form">
          <div className="firsLine">
            <div className="input-container">
              <input
                id="name"
                type="name"
                className="input"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor="name" className={`label ${name !== "" && "nozero"}`}>Name</label>
            </div>
            <div className="input-container">
              <input
                id="email"
                type="email"
                className="input"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="email" className={`label ${email !== "" && "nozero"}`}>Email</label>
            </div>
          </div>
          <div className="large">
            <div className="input-container">
              <input
                id="phone"
                type="phone"
                className="input"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <label htmlFor="phone" className={`label large ${phone !== "" && "nozero"}`}>Phone</label>
            </div>
            <div className="input-container">
              <textarea
                id="message"
                type="message"
                className="input"
                value={message}
                rows="5"
                onChange={e => setMessage(e.target.value)}
              />
              <label htmlFor="message" className={`label large ${message !== "" && "nozero"}`}>Message</label>
            </div>
          </div>
          <button
            className="button"
            onClick={e => onSend(e)}
            disabled={button.loading}
          >
            {button.text}
          </button>
        </form>
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
        .text {
          font-size: 18px;
          color: #ffeb3b;
          font-family: "avenir-light", sans-serif;
          font-weight: 400;
          line-height: 1.5;
          padding: 0;
          margin: 0;
        }
        .paragraph {
          font-size: 18px;
          color: #ffffff;
          padding: 24px 0;
        }
        .email {
          padding-left: 8px;
          font-size: 18px;
          color: #ffffff;
          text-decoration: none;
        }
        .title {
          text-transform: uppercase;
          font-size: 22px;
          color: #ffeb3b;
          margin-bottom: 8px;
          font-family: "avenir-light", sans-serif;
          font-weight: 400;
          line-height: 1.5;
        }
        .formWrapper {
          display: flex;
          padding: 24px;
          width: 70%;
          background-color: #00181b;
        }
        .about {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 0 0 40%;
          padding: 24px;
        }
        .form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 0 0 60%;
          padding: 24px;
        }
        .number {
          color: #ffffff;
        }
        .textField {
          margin-left: 8px;
          margin-right: 8px;
          background-color: #ffffff;
        }
        .firsLine {
          display: flex;
          justify-content: space-between;
          width: 100%;
          flex-direction: row;
        }
        .input-container {
          position: relative;
          margin-top: 16px;
          margin-bottom: 8px;
        }
        .label {
          position: absolute;
          top: 17px;
          left: 12px;
          font-size: 16px;
          color: #fff;	
          transition: all 0.3s ease-in-out;
          font-family: "avenir-light", sans-serif;
        }
        .input { 
          border: 0;
          border-bottom: 2px solid #fff;
          background-color: #000;
          opacity:  0.5;
          width: 100%;
          font-size: 16px;
          color: #fff;
          padding: 27px 12px 10px;
          border-radius: 4px 4px 0 0;
          color: #fff;
        }
        .input:focus { 
          border: none;	
          outline: none;
          border-bottom: 2px solid #ffeb3b;	
        }
        .nozero {
          color: #fff;
          top: 10px;
          font-size: 12px;
        }
        .input:focus ~ .label {
          top: 10px;
          font-size: 12px;
          color: #ffeb3b;
        }
        .small {
          margin-left: 8px!important;
          margin-right: 8px!important;
          background-color: #ffffff!important;
          width: 45%!important;
        }
        .large {
          width: 100%;
        }
        .button {
          width: fit-content;
          height: 42px;
          border: 0;
          border-radius: 4px;
          background-color: #ffeb3b;
          color: #000;
          margin-left: 8px;
          margin-top: 8px;
          transition: all.6s;
          line-height: 1.75;
          font-family: "avenir-light", sans-serif;
          font-weight: 500;
          border-radius: 4px;
          text-transform: uppercase;
          padding: 8px 24px;
          font-size: 0.9375rem;
          cursor: pointer;
        }
        .button:hover {
          background-color: #000;
          color: #ffeb3b;
        }
        .socialWrapper {
          display: flex;
        }
        .social {
          color: #ffeb3b;
          font-size: 36px;
          margin-right: 6px;
        }
        @media (max-width: 600px) {
          .formWrapper {
            flex-direction: column;
            padding: 8px 0;
          }
          .about {
            padding-bottom: 0;
          }
          .firsLine {
            flex-direction: column;
          }
          .form {
            align-items: flex-end;
          }
          .text {
            font-size: 14px;
          }
          .email {
            font-size: 14px;
          }
        }
      }
    `}</style>
  </>
);

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  button: PropTypes.shape({}).isRequired,
};

export default ContactForm;
