import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    
    if(loading){
        return <div className='flex min-h-screen justify-center items-center'>
<span className="loading loading-infinity loading-lg"></span>
        </div>

        
    }
    if (user && user?.email) {
        return children;
    }
        
    
    return (
        <div>
            <Navigate to="/auth/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;