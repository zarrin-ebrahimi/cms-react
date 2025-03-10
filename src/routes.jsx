import Home from "./pages/Home"
import UserList from "./pages/UserList"
import NewUser from "./pages/NewUser"
import Products from "./pages/Products"
let routes = [
    {path: '/', element: <Home></Home>},
    {path: '/users', element: <UserList></UserList>},
    {path: '/newUser', element: <NewUser></NewUser>},
    {path: '/products', element: <Products></Products>},

]

export default routes