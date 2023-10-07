import React from 'react';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
    return (
        <div>
           <div className="bg-gray-50">
  <div className="hero-content">
    <div className="card flex-shrink-0 w-full max-w-md  bg-base-100">
        <h1 className='text-3xl font-semibold text-center mt-3 text-orange-500'>Login Now</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="text-white bg-orange-500 py-3 text-lg font-semibold rounded-md">Login</button>
        </div>
         <div className='flex cursor-pointer justify-center items-center border border-orange-500 rounded-full p-1 '>
             <FcGoogle className='text-4xl mr-4'/>
             <button> Login With Google</button>
         </div>
        <div>
            <p className='text-center'>A New User ? please <Link to={'/register'} className='text-orange-500'>Register</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;