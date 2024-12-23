import { generateToken } from "./jwtAuth.js";
import userModel from "./userCollection.js";
import bcrypt from 'bcrypt';

export const registerPage = async (req , res) => {
     res.render('login');
};

export const signUpAuth = async (req, res) => {
  const {name , email, password } = req.body;
  const user = await userModel.findOne({email : email});

  if(!user){
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name : name,
      email: email,
      password : hashPass,
    });
    await newUser.save();
    const token = generateToken({_id : 1, name})
    console.log(token)
    console.log('new user created')
    res.render('home');

  };
  console.log('user already exists')
   return res.redirect('/')
};

