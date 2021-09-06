const mysql = require('mysql');
const util = require('util');

require('dotenv').config();

const { HOST, USER, PASSWORD, DATABASE } = process.env;

exports.connection = mysql.createConnection({
    host     : HOST,
    user     : USER,
    password : PASSWORD,
    database : DATABASE
});

exports.query = util.promisify(this.connection.query).bind(this.connection);
