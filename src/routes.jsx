import Home from "./pages/Home"
import UserList from "./pages/UserList"
import NewUser from "./pages/NewUser"
import Products from "./pages/Products" 
import Product from "./pages/Product"
let routes = [
    {path: '/', element: <Home/>},
    {path: '/users', element: <UserList/>},
    {path: '/newUser', element: <NewUser/>},
    {path: '/products', element: <Products/>},
    {path: '/product/:id', element:<Product/>}
]

export default routes

