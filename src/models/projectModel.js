const db = require('../config/db')


let getProjects = (callback) => {

    db.query('SELECT * FROM project' , (error,rows) => {

        if(error) throw error;
        callback(rows);
        
    })


}



module.exports =  { getProjects }



