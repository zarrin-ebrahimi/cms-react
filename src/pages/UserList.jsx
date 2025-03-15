import {useState} from 'react'
import {usersRows} from './dataUsers'
import * as Icon from '@mui/icons-material'

export default function UserList() {
  const [userDatas, setUserDatas] = useState(usersRows)
  const userDelete = userID =>{
    setUserDatas(userDatas.filter(user => user.id != userID))
  }
  return (
    <div className='bg-slate-200 mt-3 rounded-md shadow-md p-3'>
    <span className='text-xl '>Users List</span>
    <ul className=' w-full mt-3 flex  flex-col  gap-3 '>
       {userDatas.map(user =>(
            <li key={user.id} className='grid grid-cols-6 items-center  bg-white rounded-sm shadow-md p-3'>
            <div  className='flex gap-x-3 items-center col-span-2'>
                <img src={user.img} alt="" className='w-8'/>
                <span className='font-bold'>{user.username}</span> 
            </div>
            <span className=''>{user.email}</span>
            <span>{user.status}</span>
            <span>${user.transaction}</span>
             <div className='gap-3 flex '>
             <button className='bg-gray-300 rounded-md' onClick={()=>userDelete(user.id)}>
                <Icon.HighlightOff className='m-1 text-red-500' fontSize='small'/>
            </button>
            <button className='bg-gray-300 rounded-md'>
                <Icon.BorderColor className='m-1  text-blue-700' fontSize='small'/>
            </button>
            </div>
        </li>
       ))}
    </ul>
</div>
  )
}
