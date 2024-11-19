import React, { createContext, useEffect, useState } from 'react';
//import { auth } from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createNewUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const signOutUser = () => {
        
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            console.log('current User', currentUser);
            setUser(currentUser);
            
        })
        return () => {
            unSubscribe();
        }
    }
    , [])

    const authInfo = {
        user,
        setUser,
        createNewUser,
        signOutUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;