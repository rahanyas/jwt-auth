import mongoose from "mongoose";

const db_connect = async () => {
  try {
    mongoose.connect(process.env.DB_URL)
    console.log('mongodb connected');
  } catch (err) {
    if(err){
      console.log(err)
    }
  }
};

export default db_connect;