import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EmailIcon from '@mui/icons-material/Email';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'; 
import ReportIcon from '@mui/icons-material/Report';
export default function Sidebar() {
  return (
    <div className=' bg-white  '>
       <div className='bg-slate-100 p-2 m-2  rounded-sm pt-5 '>
         <span className='font-bold text-gray-900'>Dashbord</span>
          <div className='flex flex-col h-screen mt-6'>
          <ul className='ml-2 m-3 flex flex-col gap-y-1'>
            <li className='flex items-center text-gray-500 hover:text-blue-900'>
              <HomeIcon className='mr-1 text-gray-800' fontSize='small' /> 
              Home
            </li>
            <li className='flex items-center  text-gray-500'>
              <TrendingUpIcon className='mr-1 text-gray-800' fontSize='small'/> 
              Analytics
            </li>
            <li className='flex items-center  text-gray-500'>
              <TrendingUpIcon className='mr-1 text-gray-800'  fontSize='small' /> 
              Sales
            </li>
         </ul>
         <span  className='text-gray-500 text-sm '>Quick Menue</span>
         <ul  className='ml-2 mb-3 flex flex-col gap-y-1.5  '> 
         <li className='flex items-center text-gray-500'>
              <PersonIcon className='mr-1 text-gray-800'  fontSize='small'/> 
              Users
         </li>
         <li className='flex items-center text-gray-500'>
              <PersonIcon className='mr-1 text-gray-800' fontSize='small' /> 
              New Users
         </li>
         <li className='flex items-center text-gray-500'>
              <StorefrontIcon className='mr-1 text-gray-800'  fontSize='small'/> 
              Products
         </li>
         <li className='flex items-center text-gray-500'>
              <PaidIcon className='mr-1 text-gray-800' fontSize='small' /> 
              Transaction
         </li>
         <li className='flex items-center text-gray-500'>
              <AssessmentIcon className='mr-1 text-gray-800' fontSize='small' /> 
              Report
         </li>
         </ul>
         <span  className='mt-3  text-gray-500 text-sm  '>Notification</span>
         <ul className='ml-2 mb-3 flex flex-col gap-y-1'>
            <li className='flex items-center text-gray-500'>
              <EmailIcon className='mr-1 text-gray-800'  fontSize='small'/> 
              Mail
            </li>
            <li className='flex items-center  text-gray-500'>
              <ThumbUpAltIcon className='mr-1 text-gray-800' fontSize='small' /> 
              Feedback
            </li>
            <li className='flex items-center  text-gray-500'>
              <MessageIcon className='mr-1 text-gray-800'  fontSize='small'/> 
              Messages
            </li>
         </ul>
         <span  className='text-gray-500 text-sm mt-3'>Staff</span>
         <ul className='ml-2  flex flex-col gap-y-1   '>
            <li className='flex items-center text-gray-500'>
              <ManageAccountsIcon className='mr-1 text-gray-800'  fontSize='small'/> 
              Mail
            </li>
            <li className='flex items-center  text-gray-500'>
              <ReportIcon className='mr-1 text-gray-800'  fontSize='small'/> 
              Feedback
            </li>

         </ul>
          </div>
       </div> 
    </div>
  )
}
