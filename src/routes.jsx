import Home from "./pages/Home"
import UserList from "./pages/UserList"
import Product from "./pages/ProductDetailes" 
import Products from "./pages/Products"
import AddProduct from "./pages/AddProduct"
let routes = [
    {path: '/', element: <Home/>},
    {path: '/users', element: <UserList/>},
    {path: '/products', element: <Products/>},
    {path: '/product/:id', element:<Product/>},
    {path: '/newProduct' , element:<AddProduct/>}
]

export default routes

