const { query } = require('../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.loginUser = async (req, res) => {

    try {

    const { username, password, email } = req.body;

    const user = await query("SELECT * FROM users WHERE username = ?", [username]);

    if (user.length < 1) {
        return res.send({ message: "invalid credentials" });
    }

    const checkPassword = await bcrypt.compare(password, user[0].password);

    if (!checkPassword) {
        return res.send({ message: "invalid credentials" });
    }

    jwt.sign(user[0].id, "get_out", (err, token) => {
            if (err) {
                console.log(err);
            }
            res.send({ token });
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ data: "server error" });
    }
};



exports.getUser = async (req, res) => {

    try {
        
    const id = req.user;
    const user = await query("SELECT username FROM users WHERE id = ?", [id]);
    res.send({ data: user });

    } catch (error) {
        console.log(error);
        res.status(500).send({ data: "server error" });
    }
};