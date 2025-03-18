import React from 'react'
import {transactions} from './datas'


export default function WidgetLg(){

    return(
        <div className='bg-slate-50 mt-3 rounded-md shadow-md p-3'>
        <span className='text-xl '>Last Transactions</span>
        <table className='w-full'>
        <tbody className=' w-full flex flex-col gap-y-3 mt-3'>
           <tr className='grid grid-cols-5 [&_td]:font-bold  bg-white p-4 rounded-sm shadow-md'>
           <td className='col-span-2'>Customer</td>
            <td  className='text-center'>Date</td>
            <td  className='text-center'>Amount</td>
            <td className='text-center'>Status</td>
           </tr>
           {transactions.map(transaction =>{
            const  statusClass = transaction.status === "Pending" 
            ? 'text-blue-400' 
            : transaction.status === "Declined" 
            ?  'text-red-400' 
            : 'text-green-600' ;
            return(
                <tr key={transaction.id} className='grid grid-cols-5 bg-white p-2.5 rounded-sm shadow-md items-center'>
                <td  className='flex items-center col-span-2'>
                    <img src={transaction.img} alt="user"  className='w-9 mr-3' />
                    <span className=''>{transaction.customer}</span>
                </td>
                <td className='text-gray-400 text-center'>{transaction.date}</td>
                 <td className='text-center'>${transaction.amount}</td>
                 <td className='text-center'>
                 <button type='' className={`bg-gray-200/60 p-px text-center cursor-pointer px-2.5 rounded-sm ${statusClass}`}>{transaction.status}</button>
                 </td>
                </tr>
            )
           })}

         </tbody>   
        </table>    
    </div>
    )
}



