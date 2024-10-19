var User= require('../Models/user')

function show (req, res)
{
    console.log("notre class 2CINFO1");
}
async function add (req, res)
{
   try{ 
    const user=new User(req.body)
   await user.save();
   res.status(200).send("good added")
   console.log("added");
}catch(err){
    res.status(400).send(err)
    console.log(err)
}
}

function addUser (req, res)
{
new User({
    username:req.params.username,
    email:req.params.email,
    cin:req.params.cin}).save();
    res.send();
}

async function showUser (req,res){
    try{
    const user= await User.find();
    res.json(user);}
    catch(err){
        res.status(400).send(err)
    }
}

async function showById (req,res){
    try{
    const user= await User.findById(req.params.id);
    res.json(user);}
    catch(err){
        res.status(400).send(err)
    }
}

async function showByName (req,res){
    try{
    const user= await User.findOne(req.params.username);
    res.json(user);}
    catch(err){
        res.status(400).send(err)
    }
}

async function update(req, res)
{
   try{ 
    const user=await User.findByIdAndUpdate(req.params.id,req.body, {new:true});
    res.status(200).json(user);

}catch(err){
    res.status(400).send(err)
}
}
async function deleteUser (req, res)
{
   try{ 
    const user=await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted")

}catch(err){
    res.status(400).send(err)
}
}
module.exports = {add,show,showUser, showById, showByName,update, deleteUser, addUser } 