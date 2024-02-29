const express = require("express");
const bodyparser = require("bodyparser")
const mysql =requ
const app = express();

app.use(bodyparser.json());
app.post('/signup', (req, res) => {
    const { firstname, lastname, email, gender, password } = req.body;
    if (!firstname || !lastname || !email || !gender || !password) {
        return res.status(400).json({ error: 'all fields are required' });
    }
    const newuser = {
        id: 1,
        firstname,
        lastname,
        email,
        gender,
        password
    };
    res.status(201).json(newuser);
});
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('server is running on port ${port}');
})






