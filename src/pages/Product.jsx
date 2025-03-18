import React from 'react' 
import { Link } from 'react-router-dom'
import Chart from '../components/rechart/chart'
import {xAxisData} from './productDetailsData'

export default function Product() {
  
  return (
    <div  className='bg-slate-100 p-3 mt-2 pt-8 '>
        <div >
          <Link  to='/newProduct'>
          <button  className='bg-gray-800 text-white px-2.5 rounded-sm py-px'>Create New Product</button>
          </Link>
        </div>
        <div  className='grid grid-cols-2 gap-x-3 mt-5 '>
          <div className='bg-white shadow-sm rounded-md  '>
            <Chart grid  title='Month Sale' data={xAxisData}  dataKey="Sale" ></Chart> 
          </div>
             
          <div className='flex bg-white p-3 gap-x-6 shadow-sm rounded-md'>
            <img src="/images/conf-iphone15__2.jpg" alt=""className='w-42 ' />
            <div className='flex justify-center flex-col gap-y-2.5'>
              <div className='flex '>
                <span className='font-bold pr-3'>Name:</span>
                <span>Iphone Promax 15</span>
              </div>
              <div>
                <span className='font-bold pr-3'>Price:</span>
                <span>$159000000</span>
              </div>
              <div>
                <span className='font-bold pr-3'>Active:</span>
                <span>Yes</span>
              </div>
              <div>
                <span className='font-bold pr-3'>In Stock:</span>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
