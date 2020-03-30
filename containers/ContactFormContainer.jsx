import React from 'react';
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

    const mail = `Email: ${email}\n Name: ${name}\n Phone: ${phone}\n\n ${message}`;

    console.log(email, mail);
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
