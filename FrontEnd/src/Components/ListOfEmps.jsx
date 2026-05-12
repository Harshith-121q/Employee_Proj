import axios from 'axios';
// import React from 'react'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router';


export default function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const Navigate=useNavigate()  // used for navigating from one component to another


  const goToEmployee=(empObj)=>{
    // navigete to employee
    Navigate("/Employee",{state:empObj})
  }


  const goToEditEmp =(empObj)=>{
      Navigate("/EditEmployee",{state:empObj})
      
  }

  const deleteEmpById= async(empId)=>{
      let res = await axios.delete(`http://localhost:3000/emp-api/employees/${empId}`)
      if(res.status===200){
        // get latest data
        getEmps();
      }

  }

  async function getEmps() {
      let res = await fetch("http://localhost:3000/emp-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    } // useEffect will stop this func to callted by outside so put it outside the useEffect()

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center shadow-2xl rounded-2xl ">
            <p className='text-2xl'>{empObj.name}</p>
            <p className=''>{empObj.email}</p>
            
            <div className='flex justify-center gap-4 mt-6'>
              <button  className='bg-green-400 w-20 p-2 rounded-2xl text-white' onClick={()=>goToEmployee(empObj)}>View</button>
            <button className='bg-orange-500 w-20 p-2 rounded-2xl  text-white' onClick={()=>goToEditEmp(empObj)}>Edit</button>
            <button className='bg-red-500 w-20 p-2 rounded-2xl  text-white' onClick={()=>{deleteEmpById(empObj._id)}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
