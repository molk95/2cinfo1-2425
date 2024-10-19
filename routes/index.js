var express= require("express")
var route = express.Router()
var {add, show, showById, showByName, update, deleteUser,addUser,showUser} = require("../Controller/userController")
var validate = require("../middle/validate")



route.get("/show", show);
route.get("/add/:username/:email/:cin", addUser);

route.post("/add",validate, add);
route.get("/showuser",showUser);
route.get("/showuser/:id", showById);
route.get("/showusername/:name",showByName );
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser);
route.get("/chatRoute", function(req,res){
    res.render('chat') // nom page twig
});

module.exports=route