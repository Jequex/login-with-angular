const { query } = require('../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const generateId = require('../functions/generateId');
const { SERVER_ERROR, FORGOT_ERROR, USER_ERROR } = require('../constansts');

require('dotenv').config();

const { JWT_SECRET } = process.env;


exports.createUser = async (req, res) => {
    try {
        const { username, email, password, password2, fullname } = req.body;
        
        if (password !== password2) {
            return res.status(USER_ERROR.code).send(USER_ERROR.data);
        }
        const exists = await query("SELECT * FROM users WHERE username = ? OR email = ?", [username, email]);

        if (exists.length > 0) {
            return res.status(FORGOT_ERROR.code).send(FORGOT_ERROR.data);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const id = await generateId();

        await query("INSERT INTO users(id, username, email, password, full_name) VALUES(?,?,?,?,?)", [
            id, username, email, hashedPassword, fullname
        ]);

        jwt.sign(id, JWT_SECRET, (err, token) => {
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