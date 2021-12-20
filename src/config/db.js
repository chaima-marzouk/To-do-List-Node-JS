const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'to_do_list'
});


module.exports = db;





























// db.query('SELECT * FROM project' , (error,rows) => {
//     if(error) throw error;

//     console.log('Data received successfully from DB ')
//     console.log(rows)
//     rows.forEach( (row) => {
//         console.log(` the project name is : ${row.name} and the desc is ${row.description}`)
//     })

// })