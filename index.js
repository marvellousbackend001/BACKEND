const express = require('express');
const nodemailer = require('nodemailer');
const mysql = require('mysql2');

const app = express();
 


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kennedymarvellous001@gmail.com',
    pass: 'zceb znrq ajzh wszq'
  }
});

var mailOptions = {
  from: 'kennedymarvellous001@gmail.com',
  to: 'praisdania@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'how is your day going!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});



