const ProductCard = () => {
    return (
        <div>

            <div className="p-2 max-w-xs">

                <div className="bg-white rounded-lg shadow-md">

                    <div>
                        <a href="#">
                            <img className="rounded-t-lg object-cover h-36 w-full" src="/img/nvidia-geforce-rtx-3080-12.jpeg" alt="" />
                        </a>
                    </div>

                    <div className="p-5">

                        <a href="#">
                            <h5 className="font-['SoleiiBold'] mb-2 text-base font-bold tracking-wide text-gray-900">EVGA RTX 3090 FTW3 Ultra Gaming 24GB GDDR6X</h5>
                        </a>

                        <div className="pb-4">
                            <div className="font-['SoleiiBold'] text-sm text-lime-500 leading-none tracking-wide">
                                GOOD PRODUCT
                            </div>
                        </div>

                        <a href="#">
                            <h5 className="font-['SoleiiBold'] mb-2 text-base text-gray-900">How graphics card bundles are both hurting and helping during the GPU shortage</h5>
                        </a>

                        <p className="mb-3 text-sm text-gray-900">GPU bundles have been one of the only ways to buy a graphics card in 2021, and they’ve been met with a mixed . . . </p>
                        
                        <div className="pt-3 pb-3">
                            <div className="flex items-center">
                                <img className="w-6 h-6 rounded-full mr-4" src="/img/exploding-head.png" alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-sm text-gray-900">Jonathan Reinink</p>
                                    <p className="text-sm text-gray-900">Aug 18</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-row-reverse">
                            <a href="/review/1" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductCard

