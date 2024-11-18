import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
       <div>
        <h1 className="text-3xl md:text-5xl font-bold pb-5 pt-4 bg-base-200 text-center">
                Login Now!
            </h1>
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary">Login with Google</button>
                    </div>
                </form>

                <p className='ml-4 mb-4 pl-12'>
                    New to this website? Please <Link to="auth/register" className='text-blue-600'>register</Link>
                </p>

            </div>

        </div>
       </div>
        
    );
};

export default Login;