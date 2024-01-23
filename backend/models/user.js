const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserModel = mongoose.model("Teachers",UserSchema)
module.exports = UserModel