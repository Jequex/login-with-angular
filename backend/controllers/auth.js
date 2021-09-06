const { query } = require('../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { SERVER_ERROR, USER_ERROR } = require('../constansts');

require('dotenv').config();

const { JWT_SECRET } = process.env;

exports.loginUser = async (req, res) => {

    try {
    const { username, password } = req.body;
        const user = await query("SELECT * FROM users WHERE username = ?", [username]);
        
    if (user.length < 1) {
        return res.status(USER_ERROR.code).send(USER_ERROR.data);
    }

    const checkPassword = await bcrypt.compare(password, user[0].password);

    if (!checkPassword) {
        return res.status(USER_ERROR.code).send(USER_ERROR.data);
    }

    jwt.sign(user[0].id, JWT_SECRET, (err, token) => {
            if (err) {
                console.log(err);
            }
            res.send({ token });
    });
    } catch (error) {
        console.log(error);
        res.status(SERVER_ERROR.code).send(SERVER_ERROR.data);
    }
};



exports.getUser = async (req, res) => {
    try {
        const id = req.user;
        const user = await query("SELECT full_name FROM users WHERE id = ?", [id]);
        res.send({ data: user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ data: "server error" });
    }
};