const db = require('../config/db')


let getTasks = (callback, id) => {

    db.query('SELECT * FROM  task  WHERE id_project = ?', [id] , (error,rows) => {

        if(error) throw error;
        callback(rows);
        
    })


}

let deleteTask = (id) =>{
    console.log(id)
    db.query('DELETE FROM task WHERE id_task = ?', id, (err, res) => {
    if(err) throw err;
    
    });
}

module.exports ={
    getTasks,
    deleteTask

}