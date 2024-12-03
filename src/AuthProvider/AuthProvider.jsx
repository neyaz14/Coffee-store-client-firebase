import React, { createContext, useState } from 'react';
import {  createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setloading] = useState(true);
    const Currentuser = auth.currentUser;
    const singUp=(email, password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singOUT =(Currentuser)=>{
        return deleteUser(Currentuser)
    }
    const singIn = (email, password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    


    const authAllInfo ={
        user,loading, singUp ,singOUT,singIn
    }

    return (
        <AuthContext.Provider value={authAllInfo}>
            {children}
            
        </AuthContext.Provider>

    );
};

export default AuthProvider;