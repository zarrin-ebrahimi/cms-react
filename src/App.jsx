import React from 'react'
import './App.css'
import routes from './routes' 
import { useRoutes } from 'react-router-dom'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar' 

function App() {
 let router = useRoutes(routes)
 return (
    
     <div  className='flex  gap-x-2 w-full p-2 bg-white  '>
      <div className=''>
      <Sidebar/>
      </div>
     <div className='main  grow  rounded-sm overflow-y-auto '>
     <Topbar/>
   
     {router}
    
     </div>
     </div>

    
  )
}

export default App
