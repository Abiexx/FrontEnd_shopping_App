import { useState } from "react";
import { useAuth } from "../store/AuthContext";
import { useLocation } from 'react-router-dom';
import userService from "../services/apiService";

const SignUp = () => {
  const { signUp } = useAuth();
  const location = useLocation();
  const [role, setRole] = useState(location.state.role);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation here
    const { firstName, lastName, email, username, password } = formData;
    const user = { firstName, lastName, email, username, password};
    // const userRoleData = { username, role };
    console.log("sign up user ", user);
    userService.registerUserwithRole(user, role)
      .then((res) => {
        console.log("sign up add-Role-To-Users ", res.data);
        signUp(user);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-lg row">
        <div className="flex flex-wrap mx-6 mb-4">
          <h1 className="text-xl font-bold">Sign Up As {role}</h1>
        </div>
        <div className="flex flex-wrap mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            name="lastName"
                            type="text"
                            placeholder="Enter Last Name" onChange={handleChange} />
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
                            placeholder="example@domain.com" onChange={handleChange} />
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
                            placeholder="buyer" onChange={handleChange} />
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
                            type="password" onChange={handleChange}/>
                    </div>
                </div>
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                        <button onClick = {handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
        
    )
}

export default SignUp;