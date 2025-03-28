import {useState} from 'react'
import {dataProducts} from './dataProducts' 
import * as Icon from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function Products() {
  const [productsDatas, setProductDta] = useState(dataProducts)
  const productDelete = productID =>{
      setProductDta(productsDatas.filter(product => product.id != productID))
  }
  return (
    <div className='bg-slate-200 mt-3 rounded-md shadow-md p-3'>
    <span className='text-xl '>Products List</span>
    <ul className=' w-full mt-3   grid grid-cols-2  gap-3 '>
       {productsDatas.map(product =>(
            <li key={product.id} className='flex justify-between px-2  items-center  bg-white rounded-sm shadow-md'>
            <div  className='flex gap-x-3 items-center col-span-2 m-1 '>
                <img src={product.img} alt="" className='w-16 h-16 rounded-sm '/>
                <span className=' text-lg'>{product.name}</span> 
            </div>
            <span className=''>
              <Icon.MonetizationOn className='text-gray-200'/>
              {product.price}</span>      
             <div className='gap-3 flex mr-4 '>
             <button className='bg-gray-100 rounded-md' onClick={()=>productDelete(product.id)}>
                <Icon.HighlightOff className='m-1 text-gray-700' fontSize='small'/>
            </button>
            <Link to={`/product/${product.id}`}>
            <button className='bg-gray-100 rounded-md cursor-pointer'>
                <Icon.BorderColor className='m-1  text-gray-700' fontSize='small'/>
            </button>
            </Link>
            </div>
        </li>
       ))}
    </ul>
</div>
  )
}
