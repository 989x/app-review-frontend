const CommentForm = () => {
    return (
        <div>
            <div className="w-96 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <div>
                    <label for="message" className="block mb-2 text-base font-medium dark:text-gray-200">Header</label>
                    <input id="message" rows="1" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment . . ."></input>
                </div>

                <div className="pt-2">
                    <label for="message" className="block mb-2 text-base font-medium dark:text-gray-200">Your message</label>
                    <textarea id="message" rows="6" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment . . ."></textarea>
                </div>

                <div className="pt-6 flex flex-row-reverse space-x-4 space-x-reverse">
                    <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                </div>

            </div>
        </div>
    )
}

export default CommentForm
