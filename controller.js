import { handleErros } from "./helpers.js";
import { generateToken } from "./jwtAuth.js";
import userModel from "./userCollection.js";
import bcrypt from 'bcrypt';

export const registerPage = async (req , res) => {
     res.render('login');
};

export const signUpAuth = async (req, res) => {
  const {name , email, password } = req.body;
  const user = await userModel.findOne({email : email});
  if(user || user.password){
    return res.status(400).json({msg : 'user already exits and password exists'})
  }
  try {  
    if(!user){
      const hashPass = await bcrypt.hash(password, 10).then((data) => console.log(data)).catch(err => console.log(err)) 
      const newUser = new userModel({
        name : name,
        email: email,
        password : hashPass,
      });
      await newUser.save();
  
      console.log('new user created')
      res.render('home');
  
    };
  } catch (err) {
    // console.log(err);
    const errors = handleErros(err)
    return res.status(400).json({ errors })
  }
  // const errors = handleErros(err);
  // console.log(errors)
};

