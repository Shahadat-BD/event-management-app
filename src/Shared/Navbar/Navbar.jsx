import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
       logOut()
       .then(()=>{
           toast('user logOut successfully')
       })
       .catch((error)=>{
        console.log(error.message);
       })
  } 

    const link = <>
       <li className='pr-10'> 
       <NavLink  
        className="px-0 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            borderBottom: isActive ? "2px solid orange" : "none",
            background: isActive ? "none" : "none",
          })} to={'/'}>Home
        </NavLink>
        </li>
        
        {
          !user ? 
           <>
              <li className='pr-10'>
         <NavLink
          className="px-0 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            borderBottom: isActive ? "2px solid orange" : "none",
            background: isActive ? "none" : "none",
          })} to={'/about'}>About Us
          </NavLink>
          </li>

          <li className='pr-10'>
         <NavLink
          className="px-0 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            borderBottom: isActive ? "2px solid orange" : "none",
            background: isActive ? "none" : "none",
          })} to={'/Blog'}>Blog
          </NavLink>
          </li>
           </> 
           :
           ''

        }
        
       {
         user ? <>
          <li className='pr-10'>
        <NavLink 
        className="px-0 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            borderBottom: isActive ? "2px solid orange" : "none",
            background: isActive ? "none" : "none",
          })} to={'/contact'}>Contact Us
          </NavLink>
          </li>
       
       <li className='pr-10'> 
       <NavLink 
       className="px-0 rounded-none font-semibold text-md"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            borderBottom: isActive ? "2px solid orange" : "none",
            background: isActive ? "none" : "none",
          })} to={'/gallery'}>Gallery
          </NavLink>
        </li>
         </> : ''
       }


    </>
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {link}
            </ul>
          </div>
          <h1 className="lg:text-3xl text-lg font-bold"> <span className='text-orange-500'>Social</span> Events</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
           
          </ul>
        </div>
        <div className="navbar-end">
            {user && <img className='w-12 h-12 rounded-full mr-2' src={user.photoURL} alt="" srcset="" />} 
            <p className='mr-3'>{user && user.displayName}</p>
            {
            user ?   <NavLink onClick={handleLogOut} className="bg-orange-500 text-white px-8 py-2 font-semibold rounded-md">Log out</NavLink> 
            :
            <NavLink to={'/login'} className="bg-orange-500 text-white px-8 py-2 font-semibold rounded-md">Login</NavLink>
          }
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default Navbar;