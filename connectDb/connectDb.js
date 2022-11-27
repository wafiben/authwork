const url ="mongodb+srv://wafi:54900777@cluster0.ewu3a.mongodb.net/?retryWrites=true&w=majority";
  
const mongoose = require("mongoose");
const connectDb = async () => {
  try {
     mongoose.connect(url);
    console.log("db is suucessfully connected");
  } catch (error) {
    console.log("db is failed");
  } 
};
module.exports = connectDb;
