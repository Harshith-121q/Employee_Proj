import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation ,useNavigate} from 'react-router'

// import { useEffect } from 'react'

import axios from "axios"
export default function EditEmployee() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const {
        register,
        handleSubmit,
        formState:{errors},
        setValue                        //used with useEffect()
    } = useForm()
    const {state} = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        if (!state) {
            navigate("/ListOfEmps")
            return
        }
        setValue("name",state.name)
        setValue("email",state.email)
        setValue("mobile",state.mobile)
        setValue("designation",state.designation)
        setValue("companyName",state.companyName)
    },[state,setValue,navigate])      // it is used for putting the previous values in the input fields 

    const onFormSubmit = async (modifiedEmpObj) => {
        try {
            setLoading(true)
            setError("")
            let res = await axios.put(
                `http://localhost:3000/emp-api/employees/${state._id}`,
                modifiedEmpObj
            )

            if (res.status === 200) {
                navigate("/ListOfEmps")
            }
        } catch (err) {
            setError(err.response?.data?.message || err.message)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <p className="text-center text-4xl">Loading....</p>
    }

    if (error) {
        return <p className="text-red-500 text-center text-3xl">{error}</p>
    }

      // edit  , and loading is pending  
  return (
    <div>
        <h1 className='text-5xl text-center text-blue-300'>Update the Details</h1>
        <form className='max-w-md mx-auto mt-10' onSubmit={handleSubmit(onFormSubmit)}>
          <input type="text" 
          placeholder='"enter the name'
           {...register("name")}
           className='mb-3 border-2 p-3 w-full rounded-2xl' />

          <input type="text" 
          placeholder='"enter the email'
          {...register("email")} 
          className='mb-3 border-2 p-3 w-full rounded-2xl'/>

          <input type="text"
           placeholder='"enter the mobile no'
           {...register("mobile")}
            className='mb-3 border-2 p-3 w-full rounded-2xl'/>

          <input type="text"
           placeholder='"enter the designation'
           {...register("designation")} 
           className='mb-3 border-2 p-3 w-full rounded-2xl'/>

          <input type="text"
           placeholder='"enter the company name'
           {...register("companyName")} 
           className='mb-3 border-2 p-3 w-full rounded-2xl'/>

          <button type="submit" className='text-2xl rounded-2xl bg-green-400 text-white block mx-auto p-4 mt-3' >
            Save
          </button>
        </form>
    </div>
  )
}
