const nodemailer = require('nodemailer');

const emailSender = ( email, message ) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'artakom98@gmail.com',
      pass: 'ArtakO001'
    }
  });

  const mailOptions = {
    from: email,
    to: 'artakom98@gmail.com',
    subject: 'Message from CV',
    text: message,
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('error aziz', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export default emailSender;
