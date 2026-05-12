import React from 'react'
import Header from './Header'

import { Outlet } from 'react-router'
export default function RootLayout() {
  return (
    <div>
      <Header/>
      <div className='min-h-screen  p-20 bg-gray-200'>
          <Outlet/>
      </div>
    </div>
  )
}
