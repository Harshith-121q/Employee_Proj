import {Schema,model} from "mongoose"


const empSchema = new Schema({
    name :{
        type:String,
        required:[true,"Employee name required"],

    },
    email:{
        type:String,
        required:[true,"email id required"]
    },
    mobile:{
        type:Number

    },
    designation:{
        type:String
    },
    companyName:{
        type:String
    }

},
{ 
    versionKey:false,
    timestamps:true
})

export const EmployeeModel = model("employee",empSchema)
