const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {type: String, require:true, min: 4, unique:true},
    password: {type:String, require:true},
   
});

const UserModel = model('User' , UserSchema);

module.exports = UserModel;