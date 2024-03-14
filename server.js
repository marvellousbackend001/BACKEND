const express = require("express");
const bodyparser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "CHIDERA001?.1",
  database: "test2",
  port: "3306",
});


/********************Endpoint********************/

app.post("/signup", bodyparser.json(), function (req, res) {

  var sql = `INSERT INTO users(firstname,lastname,email,gender,pass)
    VALUES('${req.body.firstname}','${req.body.lastname}','${req.body.email}','${req.body.gender}','${req.body.pass}')`;
  con.query(sql, function (err, result) {
    if (err) throw err
    res.send(result);
  });
});

app.get("/login", bodyparser.json(), function (req, res) {
  var sql = `SELECT * FROM users 
    WHERE email ='${req.body.email}' AND pass ='${req.body.pass}' `
  con.query(sql, function (err, result) {
    if (err) throw err
    res.send(result);
  });
});
app.get("/getuser/:id", bodyparser.json(), function (req, res) {
  var sql = `SELECT *FROM users
    WHERE email ='${req.params.id}'`
  con.query(sql, function (err, result) {
    if (err) throw err
    res.send(result);
  });
});
app.listen(8000, console.log("listening 8000"));


/**********************************email and nodemailer***************************** */
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(express.urlencoded({ extended: true }
));

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kennedymarvellous001@gmail.com',
    pass: 'zceb znrq ajzh wszq'
  }
});

app.post('/send-email', function (req, res) {
  const { from, to, subject, body } = req.body;

  var mailOptions = {
    from,
    to,
    subject,
    body
  };

  transporter.sendMail(mailOptions, function (error, info) {

    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



