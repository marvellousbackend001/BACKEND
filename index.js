const express = require('express');
const nodemailer = require('nodemailer');

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
  to: 'udehhappy4@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});