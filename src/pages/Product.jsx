import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import Chart from '../components/rechart/chart'
import {xAxisData} from './productDetailsData'
import {dataProducts} from './dataProducts' 
import { useParams } from 'react-router-dom'
export default function Product() {
  let params = useParams()
  const [products, setProducts] = useState(dataProducts)
  const product = products.find(product => product.id == params.id);

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
           

            {product ? (
                <div className='flex bg-white p-3 gap-x-6 shadow-sm rounded-md'>
                    <img src={product.img} alt={product.name} className='w-42' />
                    <div className='flex justify-center flex-col gap-y-2.5'>
                        <div className='flex'>
                            <span className='font-bold pr-3'>Name:</span>
                            <span>{product.name}</span>
                        </div>
                        <div>
                            <span className='font-bold pr-3'>Price:</span>
                            <span>${product.price}</span>
                        </div>
                        <div>
                            <span className='font-bold pr-3'>Active:</span>
                            <span>{product.active ? "Yes" : "No"}</span>
                        </div>
                        <div>
                            <span className='font-bold pr-3'>In Stock:</span>
                            <span>{product.inStock ? "Yes" : "No"}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
           
        </div> 
    </div>
    
)} 














// {products.find(product => product.id == params.id) ? (
//   (() => {
//       const product = products.find(product => product.id == params.id);
//       return (
//           <div className='flex bg-white p-3 gap-x-6 shadow-sm rounded-md'>
//               <img src={product.img} alt={product.name} className='w-42' />
//               <div className='flex justify-center flex-col gap-y-2.5'>
//                   <div className='flex'>
//                       <span className='font-bold pr-3'>Name:</span>
//                       <span>{product.name}</span>
//                   </div>
//                   <div>
//                       <span className='font-bold pr-3'>Price:</span>
//                       <span>${product.price}</span>
//                   </div>
//                   <div>
//                       <span className='font-bold pr-3'>Active:</span>
//                       <span>{product.active ? "Yes" : "No"}</span>
//                   </div>
//                   <div>
//                       <span className='font-bold pr-3'>In Stock:</span>
//                       <span>{product.inStock ? "Yes" : "No"}</span>
//                   </div>
//               </div>
//           </div>
//       );
//   })()
// ) : (
//   <p>Product not found</p>
// )}