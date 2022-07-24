const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hyy',
})

db.query('select 1', [2], (err, results) => {
    if (err) return console.log(err.message)
    console.log(results);
})