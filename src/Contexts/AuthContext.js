import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "../Firebase/Firebase";


const AuthContext = createContext({
    currentUser:null,
    signup:(email,password)=>{},
    login:(email,password)=>{},
    logout:()=>{},
})

export const useAuth = ()=> useContext(AuthContext);

export default function AuthContextProvider(props) {

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        })
        return ()=>{
            unsubscribe();  
        }
    },[])


    const [currentUser,setCurrentUser] = useState(null);

    function signup(email,password) {
        return createUserWithEmailAndPassword( auth,email,password);
    };

    function login(email,password) {
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logout() {
        return signOut(auth);
    }

    const AuthVal = {
        currentUser,
        signup,
        login,
        logout,
    }
    
    return<AuthContext.Provider value={AuthVal}>
        {props.children}
    </AuthContext.Provider>
}