import { LockClosedIcon } from '@heroicons/react/solid'
import axios from 'axios'

import { useState } from 'react'

export default function Example() {

    const [username,setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const res = await axios.post("http://localhost:5001/api/auth/register", {
                username,
                email,
                password,
            });
            console.log(res)
            res.data && window.location.replace("http://localhost:4000/LoginScreen")
        } catch(err) {
            setError(true)
        } 
    };

    return (
    <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <div>
                    <img
                        className="mx-auto h-16 w-auto"
                        src="img/waving-hand-sign.png"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register account</h2>
                    <p className="mt-2 text-center text-lg text-gray-600">
                        Or {' '}
                    <a href="LoginScreen" className="font-lg text-indigo-600 hover:text-indigo-500">
                        Login your account
                    </a>
                    </p>
                </div>

                <form className="mt-8 space-y-4 border p-6 rounded-lg" action="#" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">

                        <div className="pb-6">
                            <h2>Username</h2>
                            <label htmlFor="Username" className="sr-only">
                                Username
                            </label>
                            <input
                                id="Username"
                                name="Username"
                                type="Username"
                                autoComplete="user"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="username..."

                                onChange={ e => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="pb-6">
                            <h2>Email address</h2>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address..."

                                onChange={ e => setEmail(e.target.value)}

                            />
                        </div>

                        <div className="pb-6">
                            <h2>Password</h2>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password..."

                                onChange={ e => setPassword(e.target.value)}
                            />
                        </div>

                        {/* <div className="pb-2">
                            <h2>Confirm password</h2>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div> */}

                    </div>

                    <div className="flex items-center">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="pr-1 ml-2 block text-sm text-gray-900">
                                I accept the 
                            </label>
                        </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Terms or Use & Privacy Policy.
                                </a>
                            </div>
                    </div>

                    <div className="pb-1">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                                REGISTER
                        </button>
                    </div>

                    <div className="flex justify-center">
                        {error && <span className="text-red-600 text-xl">Your name or email is already in use!</span>}
                    </div>

                </form>
            </div>
        </div>
    </>
     )
}
