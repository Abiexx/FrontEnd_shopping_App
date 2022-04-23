import { useRef } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";

const SignInForm = () => {

    const signinForm = useRef();

    const navigate = useNavigate();

    const signinHandler = (event) => {
        event.preventDefault();
        const formData = signinForm.current;

        const loginDetails = {
            username: formData['username'].value,
            password: formData['password'].value
        }

        axios.post("http://localhost:8080/api/v1/authenticate", loginDetails)
        .then((response) => {
            const token = response.data.access_token
            const userclaims = jwt_decode(token)
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            localStorage.setItem('role', userclaims.roles[0])
            localStorage.setItem('username', userclaims.sub)

            // const username = localStorage.getItem('username')
            // const role = localStorage.getItem('role')

            // console.log("Hello " + username + ", welcome")
            // console.log("role: " + role)

            formData.reset();
            navigate("/")
        })
        .catch((error) => console.log(error))

    }

    return (
        <form className="w-full row mx-auto" ref={signinForm}>
            <div className="flex flex-wrap mx-6 mb-4">
                <h1 className="text-xl font-bold">Enter Your Credentials</h1>
            </div>
            <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3 mb-4">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Username
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        name={"username"}
                        placeholder="user123" />
                </div>
            </div>
            <div className="flex flex-wrap mx-3 mb-5">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Password
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-password" 
                        type={"password"}
                        name={"password"} />
                </div>
            </div>
            <div className="flex flex-wrap mx-3">
                <div className="w-full px-3">
                    <button onClick={signinHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SignInForm