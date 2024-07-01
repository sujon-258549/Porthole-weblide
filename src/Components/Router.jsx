import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const router =  createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children:[
           {
             path:'/contact',
             element: <Contact></Contact>
            }
        ]
    }
])
export default router;