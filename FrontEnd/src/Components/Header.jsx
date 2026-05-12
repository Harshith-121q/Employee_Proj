// import React from 'react'
import { NavLink } from 'react-router'
export default function Header() {
  return (
    <div className='bg-blue-300 h-20'>
        <nav className='flex justify-end gap-6 p-4'>
            <NavLink to="" className={({isActive})=>(isActive ? "text-yellow-300" :"")}>
              Home
            </NavLink>
            <NavLink to="/CreateEmp" className={({isActive})=>(isActive ? "text-yellow-300" :"")}>
              CreateEmployee
            </NavLink>
            <NavLink to="/ListOfEmps" className={({isActive})=>(isActive ? "text-yellow-300" :"")}>
              List Of Employees
            </NavLink>
        </nav>
    </div>
  )
}
