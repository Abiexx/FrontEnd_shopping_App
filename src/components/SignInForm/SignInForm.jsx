
const SignInForm = () => {
    return (
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap mx-6 mb-4">
                <h1 className="text-xl font-bold">Enter Your Credentials</h1>
            </div>
            <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3 mb-4">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Username
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="user123" />
                    {/* <p className="text-red-500 text-xs italic">
                        Please fill out this field.
                    </p> */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="user@domain.com" />
                </div>
            </div>
            <div className="flex flex-wrap mx-3 mb-5">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Password
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-password" 
                        type="password" />
                </div>
            </div>
            <div className="flex flex-wrap mx-3">
                <div className="w-full px-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SignInForm