import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactForm from '../components/ContactForm';

const ContactFormContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [button, setButton] = useState({ text: 'Send', loading: false });

  const onSend = e => {
    e.preventDefault();
    setButton({ text: 'Sending...', loading: true });

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
      .then(() => {
        setButton({ text: 'Send', loading: false })
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <ContactForm
      name={name}
      email={email}
      phone={phone}
      message={message}
      setName={setName}
      setEmail={setEmail}
      setPhone={setPhone}
      setMessage={setMessage}
      button={button}
      onSend={onSend}
    />
  );
}

export default ContactFormContainer;
