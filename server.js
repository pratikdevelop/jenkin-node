const  express  = require( 'express')
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')
require("dotenv").config({ path: path.join(__dirname, "./.env") });

const  {database}  =  require('./conifg')
app.get('/',(req,res)=>{
    let data = []
    database.then((response )=>{
        data.push(response)
    })
    console.log(data)
    res.json(data)
})
app.listen(port, ()=>{
    console.log(`port listening on http://localhost:${port}`);
})