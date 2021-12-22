// const projects = require('../data/project.json')
const db = require('../config/db')




var projects = db.query('SELECT * FROM project' , (error,rows) => {

    if(error) throw error;

    console.log('Data received successfully from DB ')
    // console.log(rows)
    rows.forEach((row) => {
        console.log(` the project name is : ${row.name} and the desc is ${row.description} `)

    })

})

function findAll(){
    return new Promise((resolve, reject) => {
        resolve(projects)
        
    })
}

module.exports = {
    projects,
    findAll
}











module.exports = {
    findAll
}
    