import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate()
    const {googleSignIn,setUser} = useContext(AuthContext)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result)=>{
            setUser(result.user)
            navigate('/')
            toast('user logged in successfully')
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

  return (
    <div>
      <div className="bg-gray-50">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-md  bg-base-100">
            <h1 className="text-3xl font-semibold text-center mt-3 text-orange-500">
              Register Now
            </h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="text-white bg-orange-500 py-3 text-lg font-semibold rounded-md">
                  Register
                </button>
              </div>
              <div onClick={handleGoogleSignIn} className="flex cursor-pointer justify-center items-center border border-orange-500 rounded-full p-1 ">
                <FcGoogle className="text-4xl mr-4" />
                <button> Login With Google</button>
              </div>
              <div>
                <p className="text-center">
                  Already have an account ? please{" "}
                  <Link to={"/login"} className="text-orange-500">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
