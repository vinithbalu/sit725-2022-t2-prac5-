let client = require("./dbConnect");
let projectCollection;

setTimeout(() => {
    //  projectCollection = client.MongoClient.db().collection("projects");
    // projectCollection = client.createCollection("projects")
     console.log(client);
     if (client){
        // projectCollection = client.createCollection("projects")
        const database = client.db('admin');
        projectCollection = database.collection('projects');

     }
}, 2000)
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}
//get project...​

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}
module.exports = {
    insertProjects,getProjects
}