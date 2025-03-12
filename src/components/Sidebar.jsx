import React from 'react'
import * as Icon from '@mui/icons-material'
import {Link} from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='h-screen w-52 '>
       <div className='bg-slate-100   pl-2 h-full  rounded-sm pt-5 '>
         <span className='font-bold text-gray-900'>Dashbord</span>
          <div className='flex flex-col  mt-6 '>
          <ul className=' m-3  flex flex-col gap-y-1 '>
           <Link  to="/">
           <li className='flex items-center text-gray-500 hover:text-blue-700 cursor-pointer'>
              <Icon.Home className='mr-1 text-gray-800' fontSize='small' /> 
              Home
            </li>
           </Link>
            <li className='flex items-center  text-gray-500'>
              <Icon.TrendingUp className='mr-1 text-gray-800' fontSize='small'/> 
              Analytics
            </li>
            <li className='flex items-center  text-gray-500'>
              <Icon.TrendingUp className='mr-1 text-gray-800'  fontSize='small' /> 
              Sales
            </li>
         </ul>
         <span  className='text-gray-500 text-sm '>Quick Menue</span>
         <ul  className='ml-2 mb-3 mt-1 flex flex-col gap-y-1.5  '> 
           <Link to="/users">
           <li className='flex items-center text-gray-500'>
              <Icon.Person className='mr-1 text-gray-800'  fontSize='small'/> 
              Users
         </li>
           </Link>
           <Link  to="/newUser">
           <li className='flex items-center text-gray-500'>
              <Icon.Person className='mr-1 text-gray-800' fontSize='small' /> 
              New Users
          </li>
           </Link>
          <Link  to="/products">
           <li className='flex items-center text-gray-500'>
              <Icon.Storefront className='mr-1 text-gray-800'  fontSize='small'/> 
              Products
           </li>
          </Link>
         <li className='flex items-center text-gray-500'>
              <Icon.Paid className='mr-1 text-gray-800' fontSize='small' /> 
              Transaction
         </li>
         <li className='flex items-center text-gray-500'>
              <Icon.Assessment className='mr-1 text-gray-800' fontSize='small' /> 
              Report
         </li>
         </ul>
         <span  className='mt-3  text-gray-500 text-sm  '>Notification</span>
         <ul className='ml-2 mb-3 flex flex-col gap-y-1 mt-1'>
            <li className='flex items-center text-gray-500'>
              <Icon.Email className='mr-1 text-gray-800'  fontSize='small'/> 
              Mail
            </li>
            <li className='flex items-center  text-gray-500'>
              <Icon.ThumbUpAlt className='mr-1 text-gray-800' fontSize='small' /> 
              Feedback
            </li>
            <li className='flex items-center  text-gray-500'>
              <Icon.Message className='mr-1 text-gray-800'  fontSize='small'/> 
              Messages
            </li>
         </ul>
         <span  className='text-gray-500 text-sm mt-3'>Staff</span>
         <ul className='ml-2  flex flex-col gap-y-1 mt-1  '>
            <li className='flex items-center text-gray-500'>
              <Icon.ManageAccounts className='mr-1 text-gray-800'  fontSize='small'/> 
              Mail
            </li>
            <li className='flex items-center  text-gray-500'>
              <Icon.Report className='mr-1 text-gray-800'  fontSize='small'/> 
              Feedback
            </li>

         </ul>
          </div>
       </div> 
    </div>
  )
}
