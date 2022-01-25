import React from "react"

const CommentOnPost = () => {
    return (
        <div>
            <div className="p-6 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Header Comment</h5>
                <p className="mb-3 font-normal dark:text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quidem id dignissimos quos aliquam laboriosam, doloribus ipsam error incidunt unde voluptatem voluptatibus temporibus eos corporis itaque voluptas dolorum commodi atque!</p>
                
                <div class="pt-1 pb-5">
                    <div class="flex items-center">
                        <img class="w-8 h-8 rounded-full mr-3" src="/img/exploding-head.png" alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm">
                            <p class="text-white leading-none">Jonathan Reinink</p>
                            <p class="text-gray-300">Aug 18</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse space-x-4 space-x-reverse">
                    <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Unlike</button>
                    <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Like</button>
                </div>
            </div>
        </div>
    )
}

export default CommentOnPost
