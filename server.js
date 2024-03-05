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

app.post("/signup", bodyparser.json(), function (req, res) {
    var sql =`INSERT INTO users(fistname,lastname,email,gender,pass)
    VALUES('john','priase','praisemarvelous@gmail.com','male',1234)`
    con.query(sql, function (err, result) {
        if (err) throw err
        res.send(result);
    });
});
  
app.listen(8000, console.log("listening 8000"));


