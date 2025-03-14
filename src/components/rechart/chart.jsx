import React from 'react'
// import {
//       ResponsiveContainer ,
//       LineChart,
//       Line,
//       XAxis,
//       CartesianGrid,
//       Tooltip
// } from 'recharts' 
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data,dataKey,grid}){
    return(
      <div className='shadow-md bg-slate-100 rounded-sm p-3 '>
         <h3 className=' text-xl'>{title}</h3>
         <ResponsiveContainer width='100%' aspect={4}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#363231'/>
                <Line dataKey={dataKey} stroke='#363231' type='monotone'/>
                <Tooltip></Tooltip>
                {grid && <CartesianGrid  stroke='#e0dfdf' strokeDasharray='10'/>}
            </LineChart>
         </ResponsiveContainer>
      </div>
    )
}