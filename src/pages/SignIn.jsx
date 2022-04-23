import axios from "axios";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import authService from "../services/authService";

const SignIn = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const signInForm = useRef();
    //const location = useLocation();
    //const from = location.state?.from?.pathname || "/";

    function handleSignIn(event) {
        event.preventDefault();
        const formData = signinForm.current;

        const loginDetails = {
            username: formData['username'].value,
            password: formData['password'].value
        }

        authService.login(loginDetails).then((response) => {
            const token = response.data.access_token
            const userclaims = jwt_decode(token)
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            localStorage.setItem('role', userclaims.roles[0])
            localStorage.setItem('username', userclaims.sub)

            formData.reset();
            navigate("/")
        })
        .catch((error) => console.log(error))

        // const userType = 'ADMIN';

        // if (userType === 'ADMIN')
        //     navigate("/dash/admin")
        // if (userType === 'BUYER')
        //     navigate("/dash/buyer")
        // if (userType === 'SELLER')
        //     navigate("/dash/seller")
    }

    return (
        <div className="flex flex-col min-h-screen">
            <form className="w-full max-w-lg">
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
                        {/* <p className="text-red-500 text-xs italic">
                            Please fill out this field.
                        </p> */}
                    </div>
                    {/* <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="user@domain.com" />
                    </div> */}
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