import {useState, useEffect} from "react";

export default function SubmitReview() {
    const [nameProduct, setNameProduct] = useState('')
    const [two, setTwo] = useState('')
    const [three, setThree] = useState('')
    const [four, setFour] = useState('')
    const [frive, setFrive] = useState('')
    const [six, setSix] = useState('')
    
    const submit = () => {
        console.log('asd')
        alert()
        //test
        // axios.post(local/3001/)
    }

    useEffect(() => {
        console.log('asdasd')
        return () => {
            
        }
    }, [])

    return (
        
        <div className="max-w-fit mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-4 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-1">

            <div className="mx-auto px-4 grid gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-4 lg:max-w-screen-lg lg:px-6">

                <div className="">
                    <div className="sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Write Review</h3>
                        <p className="mt-1 text-base text-gray-600 text">
                            This information will be displayed publicly so be careful what you share.
                        </p>
                    </div>
                </div>
        
                <div className="md:col-span-8">
                    <div>
                        <div className="shadow-md sm:rounded-md sm:overflow-hidden">
                            <div className="bg-white space-y-6 sm:p-6">
                                
                                <div className="col-span-6">
                                    <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                                        Product Real Name 
                                    </label>
                                    <input
                                        onChange = {(e) => setNameProduct(e.target.value)} 
                                        value = {nameProduct}

                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Exam : IPhone xs max 64 gb"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                                        This product is about ( Types or Category ) 
                                    </label>
                                    <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Exam : Phone Mobile"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                                        Product Brand or Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Exam : Apple"
                                    />
                                </div>
                                
                                

                                <fieldset>
                                    <div>
                                    <legend className="text-base font-medium text-gray-900">What do you think of this product ?</legend>
                                    <p className="text-sm text-gray-500">Select one.</p>
                                    </div>

                                    <div className="mt-2 space-y-4">
                                        <div className="flex items-center">
                                            <input
                                                id="push-everything"
                                                name="push-notifications"
                                                type="radio"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                            <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                Good Product
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="push-email"
                                                name="push-notifications"
                                                type="radio"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                            />
                                            <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                                Bad Product
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>



                                <div>
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Write a message
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={4}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="Exam : It is fastest phone , when me play game is very smooth."
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Write an honest review or what you feel.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="remember-me" className="pr-1 ml-2 block text-base text-gray-900">
                                                I accept the 
                                            </label>
                                        </div>

                                        <div className="text-base">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Agreement & Policy.
                                            </a>
                                    </div>
                                </div>

                            </div>


                            </div>

                            

                            <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                                <button
                                    onClick={submit}
                                    type="button"
                                    className="w-40 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Post your review
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
    
        </div>


    )
  }