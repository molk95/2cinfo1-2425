var express= require("express")
var http=require("http")
var bodyParser=require("body-parser")
var indexRouter=require('./routes/index')
var mongo=require("mongoose")
var config=require("./Config/db.json")
mongo.connect(config.url)
.then(()=>console.log("database connected"))
.catch(()=>console.log("database not connected"))

var app=express();
app.use(bodyParser.json())
app.use("/index", indexRouter)

const port =3000
const server = http.createServer(app, console.log(`server is running ${port}`))
server.listen(port);

module.export=app;