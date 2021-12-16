
const http = require('http');
const mysql = require('mysql');

const hostname = 'localhost';
const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'to_do_list'
});

db.connect( (error) => {
    if(error){
        console.log("something went wrong with your database :(")
    }
    else{
        console.log("You're database has been connected sucefully :)") 
    }
});


db.query('SELECT * FROM project' , (error,row) => {
    if(error) throw error;

    console.log('Data received successfully from DB ')
    console.log(row)
})

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
   })
   server.listen(port, hostname);