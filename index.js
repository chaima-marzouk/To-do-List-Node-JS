const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const hostname = 'localhost';
const port = 3000;
const { getProjects } = require('./src/models/projectModel')



const server = http.createServer((req, res) => {
    
    if (req.url === "/project") {
        getProjects((rows) => {

            res.writeHead(200, {'Content-Type': 'text/html'});
            let  fileContent = fs.readFileSync(path.join(__dirname, "src" , "views" , `project.ejs`), 'utf-8');
            let htmlContent = ejs.render(fileContent, { projects: rows});
            res.write(htmlContent);
            res.end();

        })
            
        
    }else if (req.url === "/projectPage") {
        getProjects((rows => {
            
            res.writeHead(200, {'Content-Type': 'text/html'});
           let fileContent =  fs.readFileSync(path.join(__dirname, "src" , "views" , `project.ejs`), 'utf-8');
                let htmlContent = ejs.render(fileContent, { projects: rows});
                res.write(htmlContent);
                res.end();
        }))
        
        
        
    }else if (req.url === "/home") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(path.join(__dirname, "src" , "views" , `project.ejs`), 'utf-8' , (err, data) => {
            if(err) throw err;
            let htmlContent = ejs.render(data, []);
            res.write(htmlContent);
            res.end();
        });  
        
    }else if (req.method == "POST") {
        if (req.url == "/addProject") {
            res.write("trying to add a project")
            // console.log("you did it :))))))")
            res.end()
        }
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.readFile(path.join(__dirname, "src" , "views" , `404.ejs`), 'utf-8' , (err, data) => {
            if(err) throw err;
            let htmlContent = ejs.render(data, []);
            res.write(htmlContent);
            res.end();
        });
        
    }


});

// console.log(getProjects);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





























// db.query('SELECT * FROM project' , (error,rows) => {
//     if(error) throw error;

//     console.log('Data received successfully from DB ')
//     console.log(rows)
//     rows.forEach( (row) => {
//         console.log(` the project name is : ${row.name} and the desc is ${row.description}`)
//     })

// })







