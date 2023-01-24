require('dotenv').config()
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://vinithmongo:vinith@cluster0.myzfqd5.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url,  {useNewurlparser: true})



client.connect((err,db) => {
    if(!err){
    console.log('Mongodb connected')
    }
    else{
        console.log("DB Error: ", err);
        process.exit(1);
    }
    })
    // console.log(client);
    module.exports = client;
       
        
    