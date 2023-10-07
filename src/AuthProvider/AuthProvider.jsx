import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.int';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const googleSignIn = () =>{
    setLoading(true)
   return signInWithPopup(auth,googleProvider)
}

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setLoading(false)
        setUser(currentUser)
    });
    return () =>{
        unSubscribe()
    }
  },[])

const logOut = () =>{
    setLoading(true)
   return signOut(auth)
}


const userInfo = {googleSignIn,user,setUser,logOut,loading} 


    return (
        <AuthContext.Provider value={userInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;