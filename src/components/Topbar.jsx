import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Topbar() {
  return (
   
    <div className='bg-green-300/15 p-3  flex items-center justify-between  rounded-sm'>
        <div>
            <span className='text-xl font-bold'>Gallery Watch</span>
        </div>
        <div className='TopRight  flex gap-x-4 '>
            <div   className='cursor-pointer'>
            <Badge badgeContent={4} color="primary" className='small-badge'>
               <NotificationsIcon color="black" />
            </Badge>
            </div>
            <div  className='cursor-pointer'>
            <Badge badgeContent={4} color="primary"  className='small-badge'>
              <MailIcon color="black" />
            </Badge>
            </div>
            <div  className='cursor-pointer'>
              <SettingsIcon  />
            </div>
            <div>
              <img src="images\icons8-user-32.png" alt="" className='w-7 h-7'/>
            </div>
        </div>
    </div>
    
  )
}
