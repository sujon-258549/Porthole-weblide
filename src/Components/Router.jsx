import { createBrowserRouter } from "react-router-dom";

import Login from "./Login";
import Main from "./Main";
import Home from "./Home";
import ContactInfoall from "./ContactInfoall";

const router =  createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
            ,
           {
             path:'/login',
             element: <Login></Login>
            }
            ,
           {
             path:'/contactinfoall',
             element: <ContactInfoall></ContactInfoall>
            }
        ]
    }
])
export default router;