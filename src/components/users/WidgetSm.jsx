import React from 'react' 
import * as Icon from '@mui/icons-material'
import {newMembers} from './datas'
export default function WidgetSm(){
    return(
        <div className='bg-slate-200 mt-3 rounded-md shadow-md p-3'>
            <span className='text-xl '>New Join Member</span>
            <ul className=' w-full mt-3 grid grid-cols-2 gap-3'>
               {newMembers.map(user =>(
                    <li key={user.id} className='flex items-center justify-between bg-white rounded-sm shadow-md p-3'>
                    <div  className='flex gap-x-3 items-center'>
                    <img src={user.img} alt="" />
                        <span className='font-bold'>{user.username}</span> 
                    </div>
                    <span className=''>{user.title}</span>
                    <button className='bg-gray-300 rounded-md'>
                        <Icon.Visibility className='m-1' fontSize='small'/>
                    </button>
                </li>
               ))}
            </ul>
        </div>
    )
}