let projectmodule = require("../models/project")
// let client = require("../dbconnect");
// let projectCollection;


// setTimeout(() => {
//     //  projectCollection = client.MongoClient.db().collection("projects");
//     // projectCollection = client.createCollection("projects")
//      console.log(db);
//      if (db){
//         projectCollection = db.createCollection("projects")
//      }
// }, 2000)
// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback);
// }
// //get project...​

// const getProjects = (callback) => {
//     projectcollection.find({}).toArray(callback);
// }


//create project...
const createprojects = (req, res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;

    projectmodule.insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
}

//retrieve project...
const retrieveprojects = (req, res) => {
projectmodule.getProjects((err,result) => {
    if(err) {
        res.json({statusCode: 400, message: err})
    }
    else {
        res.json({statusCode: 200, message:"Success", data: result})
    }
})
}
module.exports = {retrieveprojects, createprojects}