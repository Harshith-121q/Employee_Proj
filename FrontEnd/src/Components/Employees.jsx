import React from 'react'
import { useLocation } from 'react-router'   //   useLocation and useNavigate work in sync useNavigate it send the data and useLocation receives the data 

export default function   () {
  // read state received in navigation 
  // const result = useLocation()
  // console.log(result)
  const {state} = useLocation()   // some error was comming using [state] see 
  console.log(state.state)
  return (
    <div className='p-20 m-20 text-2xl text-center bg-amber-400'>
          <p>Name:{state.name}</p>
          <p>Email:{state.email}</p>
          <p>Mobile No:{state.mobile}</p>
          <p>Designation:{state.designation}</p>
          <p>Company:{state.CompanyName}</p>
    </div>
  )
}
