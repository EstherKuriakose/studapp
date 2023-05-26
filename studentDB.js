// import mongoose
const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://estherkuriakose2002:estherkuriakose@cluster0.l8gexrf.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err));
let Schema = mongoose.Schema;

const studentSchema= new Schema({
    sname:String,
    sgrade:Number

})
var studentModel=mongoose.model("students",studentSchema);
module.exports= studentModel