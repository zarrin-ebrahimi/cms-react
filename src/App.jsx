import React from 'react'
import './App.css'
import routes from './routes' 
import { useRoutes } from 'react-router-dom'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar' 

function App() {
 let router = useRoutes(routes)
 return (
    
     <div  className='flex  gap-x-2 w-full bg-white p-2'>
      <div className=''>
      <Sidebar></Sidebar>
      </div>
     <div className='main grow overflow-y-scroll rounded-sm '>
     <Topbar></Topbar>
     {router}
     </div>
     </div>

    
  )
}

export default App
