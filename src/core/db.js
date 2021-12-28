import mongoose  from "mongoose";
const username="dounia";
const password="dounia";
const dbURI=`mongodb+srv://${username}:${password}@cluster0.eetyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(dbURI);
mongoose.connection.on("connected",()=>{

    console.log("Connected to mongoose");
});

mongoose.connection.on("error",err=>console.log("Connection error"+err.message));

mongoose.connection.on("disconnected",()=>console.log("Connection disconnected"));


process.on("SIGINT",()=>{
    mongoose.connection.close(()=>{
        console.log("Connection stoped");
        process.exit(0);
    });
});