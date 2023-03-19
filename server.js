const  express  = require( 'express')
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient } = require("mongodb");
const path = require('path')
require("dotenv").config({ path: path.join(__dirname, "./.env") });
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const NEW_MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(NEW_MONGO_URL);
const Moviesdata = client.db('sample_mflix').collection('movies');

app.use(cors());
app.use(express.json());
app.use(
  "/api",
  createProxyMiddleware({ target: "https://chat-api-ye6d.onrender.com/", changeOrigin: true })
);
express.urlencoded({ extended: false });



const  database  =  require('./conifg')
app.get('/',async(req,res)=>{
    const datta = await Moviesdata.find().limit(20);
    const re= await datta.toArray()
res.sendFile(path.join(__dirname+ '/index.html'))
})
app.listen(port, ()=>{
    console.log(`port listening on http://localhost:${port}`);
})