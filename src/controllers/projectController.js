const Projects = require('../models/projectModel')


async function getProjects(req,res){
    try{

        const projects = await Projects.findAll()
        res.writeHead(200,{ 'Content-Type' : 'application/json'})
        res.end(JSON.stringify(projects))
    }catch(error){
   
        console.log(error);
    }
}



module.exports = {
   getProjects
}