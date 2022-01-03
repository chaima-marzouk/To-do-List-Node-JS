const http = require('http');
const fs = require('fs');
const path = require('path');
const route = require('url')
const ejs = require('ejs');
const hostname = 'localhost';
const port = 3000;
const { getProjects } = require('./src/models/projectModel')
const { insertProject } = require('./src/models/projectModel')
const { deleteProject } = require('./src/models/projectModel')
const { parse } = require('querystring')

// console.log(insertProject.res)


const server = http.createServer((req, res) => {
    const pat = route.parse(req.url, true);
    const query = pat.query;
    const idProject = query.id;
   

    console.log(pat.pathname);
    
if (req.method == "GET"){
   
    
    if (req.url === "/") {
        getProjects((rows) => {
           

            res.writeHead(200, {'Content-Type': 'text/html'});
            let  fileContent = fs.readFileSync(path.join(__dirname, "src" , "views" , `project.ejs`), 'utf-8');
            let htmlContent = ejs.render(fileContent, { projects: rows});
            res.write(htmlContent);
            res.end();

        })
            
        
    }
    else if(pat.pathname === (`/projects/`)){

            console.log(idProject);
        
            console.log("we got it")
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.readFile(path.join(__dirname, "src" , "views" , `home.ejs`), 'utf-8' , (err, data) => {
            if(err) throw err;
            let htmlContent = ejs.render(data, []);
            res.write(htmlContent);
            res.end();
        });  
       

    }
    else if(pat.pathname === (`/delete_project/`)){
      

            console.log(idProject);
      
            deleteProject(idProject);
            res.end(' project deleted successfully :) !');
          
            

    }
    else if (req.url === "/projectPage") {
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
        
    } else  {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.readFile(path.join(__dirname, "src" , "views" , `404.ejs`), 'utf-8' , (err, data) => {
            if(err) throw err;
            let htmlContent = ejs.render(data, []);
            res.write(htmlContent);
            res.end();
        });
        
    }
    }else if (req.method == "POST") {
        if (req.url == "/addProject") {

            let body = "";


            req.on('data',  chunk   => {

                body += chunk.toString();
             
                
            }) 
              
            req.on('end', () => {

                let name = parse(body).name
                let description = parse(body).description
                console.log(parse(body).name)
                insertProject(name, description)
    
                res.write("project aded a successfully ! :) ")
                res.end();
            })
       
        }
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







