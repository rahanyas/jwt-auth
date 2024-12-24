import mongoose from "mongoose";
import validator from "validator";

const {isEmail} = validator;

const userSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : [true, 'please enter an email'],
    unique : true,
    validate : [isEmail, 'please enter a valid email']
  },
  password : {
    type : String,
    required : [true, 'please enter an password'],
    minlength : [6, 'minimum password length is 6 charecters']
  }
}, {timestamps : true });


const userModel =  mongoose.model('User', userSchema);

export default userModel;