
const http = require('http');
var db = require('./src/config/db')
const projects = require('./src/data/project.json')
const { getProjects } = require('./src/controllers/projectController')

const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req, res) => {
   if(req.url === '/api/projects' && req.method === 'GET'){
        getProjects(req, res)
    }
    else{
        res.writeHead(404, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message : 'Route Not Found'}))
    }
   })

   server.listen(port, hostname);





























// db.query('SELECT * FROM project' , (error,rows) => {
//     if(error) throw error;

//     console.log('Data received successfully from DB ')
//     console.log(rows)
//     rows.forEach( (row) => {
//         console.log(` the project name is : ${row.name} and the desc is ${row.description}`)
//     })

// })







