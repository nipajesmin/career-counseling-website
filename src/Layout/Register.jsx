import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
        
        const {createNewUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const url = form.get("url");
        const password = form.get("password");

        console.log(name,url, email, password);

        createNewUser(email,password)
        .then(result => {
            console.log(result.user);
            
        })
        .catch(error => {
            console.log('Error found', error.code)
            console.log('Error found', error.message)
        })
    };
   
    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-bold pb-5 pt-4 bg-base-200 text-center">
                Register Now!
            </h1>

            <div className="hero bg-base-200 min-h-screen">


                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='url' placeholder="Photo URL" className="input input-bordered" required />
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-6 ">
                            <button className="btn btn-primary">Login with Google</button>
                        </div>
                    </form>
                    <p className='ml-4 mb-4 pl-12'>
                        Already have account? Please <Link to="/auth/login" className='text-blue-600'>login</Link>
                    </p>
                </div>

            </div>
        </div>


    );

};

export default Register;