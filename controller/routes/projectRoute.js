var express = require("express")
var router = express.Router();
let client = require("../../dbConnect");
let projectCollection;
let controller = require("../projectcontroller")
setTimeout(() => {
    //  projectCollection = client.MongoClient.db().collection("projects");
    // projectCollection = client.createCollection("projects")
     console.log(client);
     if (client){
        const database = client.db('test');
        projectCollection = database.collection('pets');
     }
}, 2000)
const insertProjects = (project,callback) => {
    projectCollection.insertOne(project,callback);
}
//post api...
router.post('/',(req,res) => {
    // controller.createprojects(req,res)
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
    projectCollection.find({}).toArray(callback);
}

router.get('/',(req,res) => {
    // controller.retrieveprojects(req,res)
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