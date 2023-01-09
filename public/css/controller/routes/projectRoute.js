var express = require("express")
var router = express.Router();
let client = require("./models/dbConnect");
 
let projectCollection;

setTimeout(() => {
    //  projectCollection = client.MongoClient.db().collection("projects");
    // projectCollection = client.createCollection("projects")
     console.log(client);
     if (client){
        const database = client.db('admin');
        projectCollection = database.collection('projects');
     }
}, 2000)
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}
//post api...
router.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;

    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})

//get project...​

const getProjects = (callback) => {
    projectcollection.find({}).toArray(callback);
}

router.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

module.exports = router;