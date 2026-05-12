import exp from "express"
import { connect } from "mongoose"
import { EmpApi } from "./Api/EmployeeApi.js"
import cors from 'cors'
// import {config} from "dotenv"

const app=exp()

// middleware
app.use(cors({              // cors->cross origin resourse sharing 
    origin:["http://localhost:5173"]
}));

app.use(exp.json())
app.use("/emp-api",EmpApi)
// config()
// connect to database

async function connectDB() {
        try{
            await connect("mongodb://localhost:27017/EmployeeDB")
            console.log("DB connection Successfuly ")

            // start server
            app.listen(3000,()=>console.log("Server on port 3000.."))

        }
        catch(err){
            console.log(err)
        }
}

connectDB()

// error handling middleware                // erorr=>(name,message,callstack)
app.use((err,req,res,next)=>{
    // validation error 
    if(err.name == "ValidationError"){
        return res.status(400).json({message:"error occured ",err})
    }
    // Cast Error
    if(err.name == "CastError"){
        return res.status(400).json({message:"error occured ",err})
    }

    // server-side error
    res.status(500).json({message:"error occured",err})
})