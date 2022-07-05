const http= require('http');
const express= require('express');
const app=express();
const morgan=require('morgan');
const cors=require('cors');
const mongoose=require('mongoose');
const server=http.createServer(app);

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

var port='5600'
var ip='localhost'

mongoose.connect("mongodb://127.0.0.1:27017/final_v1",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> {
    console.log("Mongo Connected");
})
var createModel=mongoose.Schema({
    imgurl:String,
    title:String,
    description:String,
    date:String,
    author:{
        authorid:Number,
        imgUrl:String,
        name:String
    }
});
const Course=mongoose.model('blogs',createModel);

app.get('/',async(req, res) => {
    try{
        var getCollection= await Course.find();
        res.json(getCollection);
        res.status(200);
    }catch{
        var msg={"msg":"Something Error"};
        res.json(msg);
        res.status(400);
    }
});
app.post('/save',async(req,res)=>{
    try{
        await Course(req.body).save()
        res.json({"status":200})
    }catch{
        res.json({"status":400})
    }
});
app.post('/edit',async(req,res)=>{
    try{
        console.log(req.body)
        await Course.updateOne({_id:req.body._id},{$set:req.body})
        res.json({"status":200})
    }catch{
        res.json({"status":400})
    }
});
app.post('/delete',async(req,res)=>{
    try{
        console.log(req.body)
        await Course.deleteOne({_id:req.body._id})
        res.json({"status":200})
    }catch{
        res.json({"status":400})
    }
});
server.listen(port,ip,(err) =>{
    if(err){
        console.log(err);
    }
    console.log("Express server Running...");
})