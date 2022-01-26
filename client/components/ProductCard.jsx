const ProductCard = () => {
    return (
        <div>

            <div class="p-2 max-w-lg">

                <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <a href="#">
                        <img class="max-w-full" src="/img/nvidia-geforce-rtx-3080-12.jpeg" alt="" />
                    </a>
                    <div class="p-5">

                        <div className="pb-4">
                            <div className="text-xl text-green-500 leading-none font-extrabold tracking-wide">
                                GOOD PRODUCT
                            </div>
                        </div>

                        <a href="#">
                            <h5 class="mb-2 text-xl font-bold tracking-wide text-gray-900 dark:text-white">EVGA RTX 3090 FTW3 Ultra Gaming 24GB GDDR6X</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">GPU bundles have been one of the only ways to buy a graphics card in 2021, and they’ve been met with a mixed reception. Claims of endless profiteering and offloading undesirable products have run amok .</p>
                        
                        <div class="pt-3 pb-5">
                            <div class="flex items-center">
                                <img class="w-8 h-8 rounded-full mr-4" src="/img/exploding-head.png" alt="Avatar of Jonathan Reinink" />
                                <div class="text-sm">
                                    <p class="text-base text-white font-medium leading-none">Jonathan Reinink</p>
                                    <p class="text-gray-300">Aug 18</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-row-reverse">
                            <a href="/review/1" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductCard

