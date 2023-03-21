const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient } = require("mongodb");
const path = require('path')
require("dotenv").config({ path: path.join(__dirname, "./.env") });
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
console.log('api', process.env.MONGO_URL);
const NEW_MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(NEW_MONGO_URL);
const movies = client.db('sample_mflix').collection('movies');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log('process.env.PORT', process.env.PORT);
app.use(cors());
app.use(express.json());
app.use(
    "/api",
    createProxyMiddleware({ target: "https://movie-app-ia2z.onrender.com/", changeOrigin: true })
);
express.urlencoded({ extended: false });

app.get('/', (req, res) => {
  
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/movies', async (req, res) => {
    try {
      
      
        const movies_response = await movies.find().limit(20);
        const data = await movies_response.toArray()
        const moviesInfo = data.filter(async(movie)=>{
            // const response = await openai.createImage({
            //     prompt:movie.title,
            //     n: 1,
            //     size: "1024x1024",
            //   });
            //   movie.image_url = response.data.data[0].url;
            //   console.log('movies', movies);
              return movie
            })
            return res.status(200).json(moviesInfo)
        
    } catch (error) {
        console.log('err', error);
        return res.status(500).json(error)
    }
})

app.listen(port, () => {
    console.log(`port listening on https://movie-app-ia2z.onrender.com/`);
})
