import React, { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import{
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useEffect } from 'react';
initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
        
    }
    const logOut =()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false));
            
        
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    
    return {
        signInWithGoogle,
        logOut,user,
        isLoading,setUser

    }
};

export default useFirebase;