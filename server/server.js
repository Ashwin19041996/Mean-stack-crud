
const express=require('express')
const app=express()
const path=require('path')
var cors=require('cors')
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
const URL = require('url-parse');


// app.use(express.static(path.join(__dirname, '../src/index.html')));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/laptop-service',{})
.then(()=>{
    console.log("mongodb connection successful")
})
.catch((err)=>{
    console.log("connection error",err)
})

const serviceSchema=new mongoose.Schema({
    name:String,
    email:String,
    contact_number:Number,
    laptop_model:String,
    laptop_issue:String
})


const Services=new mongoose.model('Services',serviceSchema)


app.get('/',(req,res)=>{
    res.send("hello world")
  
  })

app.get('/api/getservices',async (req,res)=>{
    const serv1= await Services.find({})
    res.send({serv1})

})


app.post('/api/postformdata',async (req,res)=>{
    const newservices=new Services(req.body);
    await newservices.save()
    res.send(req.body)

})

app.get('/api/:id',async (req,res)=>{
    const {id}=req.params
    const user= await Services.findById(id)
    res.send({user})
})

app.put('/api/:id/edit', async(req,res)=>{
    const {id}=req.params
    console.log(req.body)
    const newuser=await Services.findByIdAndUpdate(id,req.body)
    await newuser.save()
    res.send()
})

app.delete('/api/:id/delete', async(req,res)=>{
    const {id}= req.params
    await Services.findByIdAndDelete(id)
    res.send()
})



app.listen(8000,()=>{
    console.log("listening to port 8000")
})

