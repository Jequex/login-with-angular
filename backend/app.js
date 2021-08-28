const express = require('express');
const { connection } = require('./db/db');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("database connected successfully");
});

app.use(express.json());
app.use(cors());

app.use('/user', require('./routes/user'));
app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));

app.listen(PORT, () => {
    console.log(`server is running successfully on port: ${PORT}`);
});