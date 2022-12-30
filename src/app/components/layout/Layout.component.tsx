import React from 'react'
import { routes } from '../../../routes/route'
import { RouterProvider } from 'react-router-dom'
import { FixHeader } from '../header'
const LayoutComponent = () => {
  return (
    <div className='w-full  bg-black'>
      {/* header  */}
      <div className='w-full' style={{ height: '80px' }}>
        <FixHeader />
      </div>
      {/* content */}
      <RouterProvider router={routes} />
    </div>
  )
}

export default LayoutComponent