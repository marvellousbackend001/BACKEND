const express = require("express");
const bodyparser = require("body-parser");
const mysql = require("mysql2");

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
    var sql =`SELECT *FROM users
    WHERE email ='${req.params.id}'`
    con.query(sql, function (err, result) {
        if (err) throw err
        res.send(result);
    });
});
app.listen(8000, console.log("listening 8000"));


