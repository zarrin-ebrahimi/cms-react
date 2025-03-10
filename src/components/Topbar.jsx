import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Topbar() {
  return (
    <div className='bg-gray-200 p-3  flex items-center justify-between'>
        <div>
            <span className='text-xl font-bold'>Academi Zarrin</span>
        </div>
        <div className='TopRight  flex gap-x-4'>
            <img src="" alt="" />
            <div>
            <Badge badgeContent={4} color="primary" className='small-badge'>
               <NotificationsIcon color="black" />
            </Badge>
            </div>
            <div>
            <Badge badgeContent={4} color="primary"  className='small-badge'>
              <MailIcon color="black" />
            </Badge>
            </div>
            <div>
              <SettingsIcon></SettingsIcon>
            </div>
        </div>
    </div>
  )
}
