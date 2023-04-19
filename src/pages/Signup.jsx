import { useRef } from "react";
import { useAuth } from "../store/AuthContext";
import { useLocation } from 'react-router-dom';


const SignUp = () => {
    const signupForm = useRef();
    const {signUp} = useAuth();
    const location = useLocation();
    console.log("===== location", location.state);
    const {role} = location.state;
   


    function handleSignup(event) {
        event.preventDefault();
        const formData = signupForm.current;

        const loginDetails = {
            username: formData['username'].value,
            password: formData['password'].value
        }

        signUp(loginDetails);
    }

    return (
        role === 'seller' ? <h1>Seller Payment-Sign-Up Form</h1>
        :
        <div className="flex flex-col min-h-screen">
            <form ref={signupForm} className="w-full max-w-lg row">
                <div className="flex flex-wrap mx-6 mb-4">
            
                    <h1 className="text-xl font-bold">Sign Up As {role}</h1>
                </div>
                <div className="flex flex-wrap mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            name="firstname"
                            type="text"
                            placeholder="Jane" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            name="lastname"
                            type="text"
                            placeholder="Doe" />
                    </div>
                </div>

                <div className="flex flex-wrap mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-email"
                            name="email"
                            type="text"
                            placeholder="user@domain.com" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-username">
                        Username
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-username"
                            name="username"
                            type="text"
                            placeholder="username" />
                    </div>
                </div>

                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-password"
                            name="password"
                            type="password" />
                    </div>
                </div>
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                        <button onClick={handleSignup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
        
    )
}

export default SignUp;