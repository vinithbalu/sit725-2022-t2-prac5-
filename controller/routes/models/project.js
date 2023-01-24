let client = require("../../../dbConnect");
let projectCollection;

setTimeout(() => {
    //  projectCollection = client.db().collection("projects");
    // projectCollection = client.createCollection("projects")
     console.log(client);
     if (client){
        // projectCollection = client.createCollection("projects")
        const database = client.db('test');
        projectCollection = database.collection('pets');

     }
}, 2000)
const insertProjects = (project,callback) => {
    projectCollection.insertOne(project,callback);
}
//get project...​

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}
module.exports = {
    insertProjects,getProjects
}