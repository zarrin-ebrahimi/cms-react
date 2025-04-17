import React from 'react'

export default function BoxFeatures({children}) {
  return (
    <div className='rounded-sm shadow-sm p-3 bg-green-300/15 my-3  border-r-2'> 
        {children}
        <span className='text-gray-400 text-sm'>Compared to last month</span>
    </div>
  )
}
