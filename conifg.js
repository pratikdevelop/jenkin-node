
// const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');

const MONGO_URL = "mongodb+srv://adminchatapp:fOdPrVZWwdCpqTLi@cluster0.nt431ty.mongodb.net/chat-app?retryWrites=true&w=majority";
 const  connectMongo = async()=>{
    // mongoose.connect(MONGO_URL,  {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // }).then(()=>{
    //     console.log("connection successful");
    // }).catch((err)=>{
    //     console.log(err);
    // })
    try {
        const client = new MongoClient(MONGO_URL);

        await client.connect();
            // console.log('res', response);
       return client;
     
    } catch (e) {
        console.error(e);
    }
}

const connectClient =  connectMongo()

exports.connectClient = connectClient;