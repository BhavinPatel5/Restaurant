import mongoose from "mongoose";

export const dbConnection = ()=> {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant"
    }).then(()=>{
        console.log("Connected to database succefully !");
    }).catch((err)=> {
        console.log("Some error occured while connecting to database ! ${err}");
    })
}