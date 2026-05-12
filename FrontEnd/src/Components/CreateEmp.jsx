// import React from 'react'
import {useForm} from "react-hook-form"
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function CreateEmp() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      let res = await fetch("http://localhost:3000/emp-api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 200) {
        console.log(res.status);
        //navigate to employees component programatically
        navigate("/ListOfEmps");
      } else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(errors);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
        <h1 className='text-5xl text-center text-blue-300'>Create New Employee</h1>
        <form className='max-w-md mx-auto mt-10' onSubmit={handleSubmit(onFormSubmit)} >
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

          <button type="submit" className='text-2xl rounded-2xl bg-gray-300 text-white block mx-auto p-4' >
            Add Employees
          </button>
        </form>
    </div>
  )
}
