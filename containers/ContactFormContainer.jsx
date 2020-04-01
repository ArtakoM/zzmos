import React from 'react';
import emailjs from 'emailjs-com';
import ContactForm from '../components/ContactForm';

class ContactFormContainer extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  onChange = (field, val) => {
    return this.setState({
      [field]: val,
    });
  };

  onSend = e => {
    e.preventDefault();

    const {
      email,
      name,
      phone,
      message,
    } = this.state;

    emailjs.send(
      'gmail',
      'template_DgRHUNcA',
      {
        email,
        name,
        phone,
        message,
      },
      'user_e9afVe4yEarL6GPnVDmeZ'
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  render() {
    const {
      name,
      email,
      phone,
      message,
    } = this.state;

    return (
      <ContactForm
        name={name}
        email={email}
        phone={phone}
        message={message}
        onChange={this.onChange}
        onSend={this.onSend}
      />
    );
  }
}

export default ContactFormContainer;
