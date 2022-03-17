import React from 'react'

export const CommentPost = () => {
    return (
        <div className="grid grid-col-2 lg:gap-4">

                        {/* {username === user?.username && (
                            <div className="p-6 max-w-7xl">
                                <div className="flex space-x-6 justify-end">
                                    <div className="pt-2 pr-4 font-bold text-xl">
                                        About your review
                                    </div>
                                    <a
                                        href={`/review/${router.query.id}/update`}
                                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Edit
                                    </a>

                                    <a 
                                        // href="/"
                                        className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => onDelete(router.query.id)}
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                        )} */}

                        <div className="p-6 max-w-7xl rounded-lg shadow-md">

                            <div>
                                <div className="flex items-center">
                                    <img className="w-12 h-12 rounded-full mr-6" src="/img/exploding-head.png" alt="Avatar" />
                                    <div>
                                        <div>
                                            <p 
                                                className="text-base text-black leading-none font-bold tracking-wide"
                                                // value={username}
                                                // onChange={(e) => setUsername(e.target.value)}
                                            >username </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <p 
                                    // value={message}
                                    // onChange={(e) => setMessage(e.target.value)}
                                    className="text-base mt-1 text-gray-900"
                                >
                                    {/* {message} */}
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Consectetur dolor suscipit veniam quisquam sapiente. Doloremque 
                                    modi eius possimus voluptates laborum non odit, quidem, nihil 
                                    exercitationem eveniet quasi, facere ad maxime!
                                </p>
                                
                            </div>

                        </div>

                    </div>


    )
}
