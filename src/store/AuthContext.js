import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();

    function signIn(userDetails) {
        authService.signIn(userDetails, (user) => {
            console.log("inside authcontext" + user);
            setCurrentUser(user);
            navigate('/');
        })
    }

    function signUp(userDetails) {
        authService.signUp(userDetails, (user) => {
            setCurrentUser(user);
            navigate('/');
        })
    }

    function signOut() {
        setCurrentUser(null);
        localStorage.clear();
        navigate("/home");
    }

    return (
        <AuthContext.Provider value={{currentUser, signIn, signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}