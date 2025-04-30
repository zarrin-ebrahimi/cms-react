import {useState, useEffect, useCallback} from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { Link } from 'react-router-dom'
import DeleteModal from '../components/modals/DeleteModal' 
import { useDeleteModal } from '../hooks/useDeleteModal'
export default function Products() {

  const [productsDatas, setProductDatas] = useState([])


  const getAllProducts = useCallback(()=>{
    fetch('http://localhost:4000/products')
    .then(res => res.json())
    .then(products => console.log(setProductDatas(products)))
    .catch(error => console.error('Error fetching products', error)
    )
  }, [])


  useEffect(()=>{
    getAllProducts()
  }, [getAllProducts])

const deleteProductById = async (id) =>{
  await fetch(`http://localhost:4000/products/${id}`, {
    method: 'DELETE'
  })
  console.log('removed');
  getAllProducts()
}

const {
  isOpenModal,
  openModal,
  closeModal,
  confirmDelete
} = useDeleteModal(deleteProductById)


  return (
    <>
       <DeleteModal 
         open={isOpenModal}
         title={'Are you sure to delete this Product?'}
         onClose={closeModal}
         onConfirm={confirmDelete}
       />


    <div className='bg-green-300/15 mt-3 rounded-md shadow-md p-3'>
    <div className='flex items-center justify-between w-full'>
    <span className='text-2xl font-bold '>Products</span>
        <div>
          <Link  to='/newProduct'>
              <button type='button' className='bg-gray-800 text-white px-2.5  rounded-sm py-1'>Create New Product</button>
          </Link>
        </div> 
    </div>
    <ul className=' w-full mt-3   grid grid-cols-4  gap-3 '>
       {productsDatas.map(product =>(
            <li key={product.id} className='flex flex-col p-3    bg-white rounded-sm shadow-md'>
              <img src={`/images/${product.image}`} alt="" className='h-40 w-full rounded-sm '/>
            <div  className='flex flex-col my-2.5'>
                <span className='font-bold line-clamp-1'>{product.title}</span> 
                <span className='text-lg'>${product.price}</span>      
            </div>
             <div className='gap-2 flex  '>
             <button type='button' className='bg-gray-200 rounded-md cursor-pointer' onClick={()=>openModal(product.id)}>
                <DeleteSweepIcon className='m-1 text-gray-700' fontSize='small'/>
            </button>
            <Link to={`/product/${product.id}`}>
            <button type="button" className='bg-gray-200 rounded-md cursor-pointer'>
                <BorderColorIcon className='m-1  text-gray-700' fontSize='small'/>
            </button>
            </Link>
            </div>
        </li>
       ))}
    </ul>
    </div>
</>
  )
}
