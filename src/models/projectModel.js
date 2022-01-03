const db = require('../config/db')


let getProjects = (callback) => {

    db.query('SELECT * FROM project' , (error,rows) => {

        if(error) throw error;
        callback(rows);
        
    })


}

let insertProject = ( name, description) =>{
    const author = { name: name, description: description };
    db.query('INSERT INTO project SET ?', author, (err, res) => {
    if(err) throw err;
    
    // console.log('Last insert ID:', res.id);
    callback(res)
    });
}

let deleteProject = (id) =>{
    console.log(id)
    // const author = { name: name, description: description };
    db.query('DELETE FROM project WHERE id = ?', id, (err, res) => {
    if(err) throw err;
    // console.log(`Deleted ${res.affectedRows} row(s)`);
    
    // console.log("test");
    // callback(res)
    });
}



module.exports =  { 
    getProjects,
    insertProject,
    deleteProject
 }



