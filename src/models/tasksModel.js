const db = require('../config/db')


let GetTasks = (callback) => {

    db.query('SELECT * FROM  task' , (error,rows) => {

        if(error) throw error;
        callback(rows);
        
    })


}

module.exports ={
    GetTasks,

}