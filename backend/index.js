const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel =require('./models/user')



mongoose.connect("mongodb://192.168.56.1:27017/attendance_app");

const app = express()
app.use(express.json())
app.use(cors())


app.post('/login',(req,res)=>{
    const{username ,password}= req.body;
    UserModel.findOne({username:username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Successfully logged in.")
            }
            else{
                res.json("Please check your password.")
            }
        }else {
            res.json("No such user is found.")
        }
    })

})
app.listen(3001,()=> {
    console.log("Server is running.")
})