//server instance
const express = require("express");
const app = express();

//load config from env file
//config load in process object
require("dotenv").config();
const PORT = process.env.PORT ||4000;

//middleware to parse json request body
app.use(express.json());


//import routes for todo api
const todoRoutes = require("./routes/todos");

//mount the todo api route
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT, () =>{
    console.log("server started successfully at ${PORT}");
})

//database connection
const dbConnect = require("./config/database");
dbConnect();


// default route
app.get('/',(req,res) => {
    res.send('<h1>This is homepage</h1>');
})