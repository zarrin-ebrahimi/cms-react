import React from 'react'
import './App.css'
import routes from './routes' 
import { useRoutes } from 'react-router-dom'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
function App() {
 let router = useRoutes(routes)
 return (
    <>
     <div  className='container flex w-full  bg-white '>
     <Sidebar></Sidebar>
     <div className='main grow  overflow-y-scroll rounded-sm my-2'>
     <Topbar></Topbar>
     {router}
     </div>
     </div>
    </>
  )
}

export default App
