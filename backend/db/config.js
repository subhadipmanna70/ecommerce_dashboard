// const mongoose=require('mongoose');
// mongoose.set('strictQuery',false);
// require('dotenv').config();

// // mongoose.connect("mongodb://0.0.0.0:27017/e-commerce");


// mongoose.connect(process.env.DB_URL,
//     {
//       //   these are options to ensure that the connection is done properly
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     }
//   );
 
const mongoose = require("mongoose");
mongoose.set('strictQuery',false);
require('dotenv').config();

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
   await mongoose
    .connect(
        process.env.DB_URL,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true
    
       
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

 module.exports=dbConnect;
