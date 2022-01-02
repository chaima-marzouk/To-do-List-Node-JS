const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const hostname = 'localhost';
const port = 3000;
const { getProjects } = require('./src/models/projectModel')
const { insertProject } = require('./src/models/projectModel')

// console.log(insertProject.res)


const server = http.createServer((req, res) => {
    
    
    
   
   
    
    if (req.url === "/") {
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



            req.on('data',  chunk   => {
       
                console.log(req.url =` /addProject/${ chunk }` )
                  

            //    chunk.split("&")
                // console.log(`Data chun euuuh !!: ${chunk}`)
                
            })
            // req.on('end', () => {
            //     //end of data
            // })
           

            // const data = Buffer.concat(buffers).toString();
            // let data = '';

            // req.on('data', chunk => {
            //    let chnuunk =  stringify(chunk)
            //     console.log(chnuunk)
            // })
            // req.on('end', () => {
            //     //end of data
            // })

             // we can access HTTP headers

            
            // const buffers = []; 
            // req.setEncoding('utf8')
          
            
            // for(const chunk in req) {
            //     buffers.push(chunk);
            //     console.log(typeof chunk)
            //   }

            //   const data = Buffer.concat(buffers).toString();
        
                    // var data = '';
                    //   req.on('data', chunk => {
                    //   data += chunk;
                    // console.log(typeof data)
                // })
              
            req.on('end', () => {
            //     console.log(JSON.stringify(data)); 
            //     let name = JSON.stringify((data))
            //     let description = JSON.stringify((data))
            //     console.log( JSON.stringify((data)))
            //     insertProject(name, description)
            // console.log(JSON.parse(data));
    
                res.write("trying to add a project")
                res.end();
            })
            // res.end()
       
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







