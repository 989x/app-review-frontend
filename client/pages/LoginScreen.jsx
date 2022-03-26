import { LockClosedIcon } from '@heroicons/react/solid'
import axios from 'axios'

import { useContext, useRef } from 'react'
import { Context } from '../context/Context'

export default function Example() { 

    const userRef = useRef()
    const passwordRef = useRef()
    const {  user, dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"})
        try {
            const res = await axios.post("http://localhost:5001/api/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            window.location.href="http://localhost:4000/";
        } catch(err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    }
    console.log(user);
    console.log(dispatch);

  return (
    <div>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <div>
                    <img
                        className="mx-auto h-16 w-auto"
                        src="img/waving-hand-sign.png"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-lg text-gray-600">
                    Or {' '}
                    <a href="Register" className="font-lg text-indigo-600 hover:text-indigo-500">
                        Create Accout
                    </a>
                    </p>
                </div>

                <form className="mt-8 space-y-4 border p-6 rounded-lg" action="#" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="pb-8">
                                <h2>username</h2>
                                <label htmlFor="username" className="sr-only">
                                    username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="username"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="username..."

                                    ref = {userRef}
                                />
                            </div>

                            <div className="pb-2">
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

                                    ref = {passwordRef}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                    <div className="pb-4">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                                SIGN IN
                        </button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}
