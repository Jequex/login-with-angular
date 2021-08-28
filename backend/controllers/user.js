const { query } = require('../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const generateId = require('../functions/generateId');


exports.createUser = async (req, res) => {
    try {
        const { username, email, password, fullname } = req.body;

        const exists = await query("SELECT * FROM users WHERE username = ?", [username]);
        if (exists.length > 0) {
            return res.status(400).send({data: "user already exists"})
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const id = await generateId();

        await query("INSERT INTO users(id, username, email, password, full_name) VALUES(?,?,?,?,?)", [
            id, username, email, hashedPassword, fullname
        ]);

        jwt.sign(id, "get_out", (err, token) => {
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