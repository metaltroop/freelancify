const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const UserDataSchema = new Schema({
    fullName: String,
    exp:String,
    gender:String,
    domain:String,
    portfolio:String,
    cover:String,
    email:{type:Schema.Types.ObjectId, ref:'User' },
}, {
    timestamps:true,
});

const UserDataModel = model('UserData' , UserDataSchema);

module.exports = UserDataModel;