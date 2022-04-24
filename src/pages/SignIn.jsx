import { useRef } from "react";
import { useNavigate } from "react-router-dom";
//import authService from "../services/authService";
//import jwt_decode from "jwt-decode";
import { useAuth } from "../store/AuthContext";

const SignIn = () => {
    const navigate = useNavigate();
    const signInForm = useRef();
    const {currentUser, signIn} = useAuth();

    function handleSignIn(event) {
        event.preventDefault();
        const formData = signInForm.current;

        const loginDetails = {
            username: formData['username'].value,
            password: formData['password'].value
        }

        signIn(loginDetails);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <form ref={signInForm} className="w-full max-w-lg">
                <div className="flex flex-wrap mx-6 mb-4">
                    <h1 className="text-xl font-bold">Enter Your Credentials</h1>
                </div>
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3 mb-4">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="uname">
                            Username
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="uname"
                            name="username"
                            type="text"
                            placeholder="user123" />
                    </div>
                </div>
                <div className="flex flex-wrap mx-3 mb-5">
                    <div className="w-full px-3">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="pword">
                            Password
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="pword" 
                            name="password"
                            type="password" />
                    </div>
                </div>
                <div className="flex flex-wrap mx-3">
                    <div className="w-full px-3">
                        <button onClick={handleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn;