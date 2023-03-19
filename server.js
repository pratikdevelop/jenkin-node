const  express  = require( 'express')
const app = express();
const port = process.env.PORT || 3000;
const  {connectClient}  =  require('./conifg')
app.get('/',(req,res)=>{
   connectClient.then(async data=>{
    databasesList = await data.db('sample_mflix').collection('sample_mflix')
    const movies = await databasesList.find()
    console.log(movies);
    })
    res.send('hello world')
})
app.listen(port, ()=>{
    console.log(`port listening on http://localhost:${port}`);
})