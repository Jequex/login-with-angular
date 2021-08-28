const mysql = require('mysql');
const util = require('util');

exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
});

exports.query = util.promisify(this.connection.query).bind(this.connection);
