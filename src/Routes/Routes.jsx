import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import NotFound from "../NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

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
                path: '/blog',
                element: <Blog></Blog>
            }, 
            {
                path: '/about',
                element: <About></About>
            }, 
            {
                path: '/contact',
                element: <Contact></Contact>
            }, 
            {
                path: '/service/:id', 
                element: <ServiceDetails></ServiceDetails>
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