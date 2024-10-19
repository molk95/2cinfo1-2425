var express= require("express")
var http=require("http")
var bodyParser=require("body-parser")
var indexRouter=require('./routes/index')
var path = require('path')
var mongo=require("mongoose")
var config=require("./Config/db.json")
mongo.connect(config.url)
.then(()=>console.log("database connected"))
.catch(()=>console.log("database not connected"))

var app=express();
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "twig")

app.use(bodyParser.json())
app.use("/index", indexRouter)

const port =3000
const server = http.createServer(app, console.log(`server is running ${port}`))
const io=require("socket.io")(server)
io.on('connection', (socket) => {
    console.log('someone connected!');
    socket.on('disconnect',()=>{
        console.log("User disconnected")
    })
  });
server.listen(port);

module.export=app;