// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDb from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDb()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at PORT : ${process.env.PORT}`);
    
  })
})
.catch((err) => {
  console.log("MongoDb Connection Failed !! ", err);
  
})





















/*
import express from "express"
const app = express()

( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/&{DB_NAME}`)
    app.on("error", () => {
      console.log("Error: ", error);
      throw error
      
    })

    app.listen(process.env.PORT, ()=>{
      console.log(`App is listenening on port ${process.env.PORT} `);
      
    } )

  } catch (error) {
    console.error("ERROR: ", error );
    throw error
    
  }
})()

*/