// 1.importing
const express= require('express');
const { model}= require('mongoose');
const studentModel= require('./model/studentDB')
const cors = require('cors')

// 2.Initialisation
const app = new express();
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())
// 3.api create
// post create
app.post('/create',(req,res)=>{
    console.log(req.body);
  var result = new studentModel(req.body);
  result.save();
  res.send("data added")
})
// to view data
app.get('/see',async(req,res)=>
{
    var data =await studentModel.find();
    res.json(data);
}) 
// app.get(url,callback)
 app.get('/view',(req,res)=>{
    res.json({"name":"Tiya","age":12})
     
 })

//  delete
app.delete('/delete/:id',async(req,res)=>{
    let id = req.params.id;
    await studentModel.findByIdAndDelete(id);
    res.send("deleted")
})
// update
app.put('/edit/:id',async(req,res)=>{
    var id= req.params.id;
    console.log("edit",id)
    await studentModel.findByIdAndUpdate(id,req.body)
    res.send("updated")
})
// port
app.listen(8050,()=>{
    console.log("server is running in port 8050")
})