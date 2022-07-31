const  express = require("express");
const App=express();
const port=8000
const mongoose=require("mongoose")
const { Mongo}= require('./keys')
const bodyParser=require("body-parser")
const cors =require("cors")
require("./models/User")
require("./models/post")

mongoose.connect(Mongo)
mongoose.connection.on('connected',()=>{console.log("connected to the datatbase")})
mongoose.connection.on('error',(err)=>{console.log("error in connecting",err)})

App.use(
    cors({
        origin:"http://localhost:3000",
        credential:true,
    })
)

App.use(express.json())
App.use(require('./routes/auth'))
App.use(require('./routes/post'))


App.listen(port,()=>{
console.log("server is running at",port)
})