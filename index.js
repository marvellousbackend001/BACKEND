const express = require('express');
const nodemailer = require('nodemailer');
const mysql = require('mysql2');

const app = express();


const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'CHIDERA001?.1',
  database: process.env.DB_NAME || 'test2'
 });

 connection.connect(error => {
  if (error) {
     console.error('Error connecting to the database:', error);
     return;
  }
  console.log('Connected to the database');
 });


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



