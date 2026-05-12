import exp from "express"
import {EmployeeModel} from "../Model/EmployeeSchema.js"

export const EmpApi = exp.Router()

EmpApi.post("/employees",async(req,res)=>{
    const newEmployee = req.body

    //  craeting new employee
    const employeeDocument = new EmployeeModel(newEmployee)
    // save the changes 
    const result = await employeeDocument.save()

    console.log(result)

    // send response
    res.status(200).json({message:"Employee added"})
})

EmpApi.get("/employees",async(req,res)=>{
    // read employees from db

    let empList = await EmployeeModel.find()
    
    res.status(200).json({message:"Employees List",payload:empList})
})

// edit employee details:
EmpApi.put("/employees/:id",async(req,res)=>{
    const modifiedEmp = req.body;
    // find and update 
    let updatedEmp = await EmployeeModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:{...modifiedEmp},
        },
        { returnDocument:"after"},
        
    )
    if(!updatedEmp){
        return res.status(404).json({message:"Emp not Found"})

    }
    res.status(200).json({message:"Employee updated ",payload:updatedEmp})
})

// delete Emp by id
EmpApi.delete("/employees/:id",async(req,res)=>{
    let deletedEmp = await EmployeeModel.findByIdAndDelete(req.params.id)
    if(!deletedEmp){
        res.status(404).json({message:"Emp not Found"})
    }
    res.status(200).json({message:"Emp deleted successfully",payload:deletedEmp})
})
