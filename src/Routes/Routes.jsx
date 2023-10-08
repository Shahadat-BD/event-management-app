import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import NotFound from "../NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement : <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            }, 
            {
                path: '/contact',
                element: <Contact></Contact>
            }, 
            {
                path: '/service/:id', 
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:() => fetch('/Event.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;