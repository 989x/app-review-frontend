import CommentForm from "../../components/Post/CommentForm"
import CommentOnPost from "../../components/Post/CommentOnPost"
  
export default function Example() {
    return (
        
        <div className="bg-white">

            {/* nav bar item */}
            <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-4 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2">
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-700">
                            <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            <a href="#" class="ml-1 text-base tracking-wide font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-blue-700">Home</a>
                        </a>
                        </li>
                        <li>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <a href="#" class="ml-1 text-base tracking-wide font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-blue-700">Projects</a>
                        </div>
                        </li>
                        <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span class="ml-1 text-base tracking-wide font-medium text-gray-400 md:ml-2 dark:text-gray-500">FlowBite</span>
                        </div>
                        </li>
                    </ol>
                </nav>
            </div>
          
            {/* item post */}
            <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-16 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2">

                {/* item img */}

                <div>

                    <div className="grid grid-col-2 sm:gap-6 lg:gap-8 justify-items-center">

                        <img
                        src="/img/nvidia-geforce-rtx-3080-12.jpeg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="bg-gray-100 rounded w-11/12"
                        />

                        <div className="flex sm:gap-4 justify-around">
                            <img 
                            width={100} height={100}
                            src="/img/graphics-card.webp"
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="bg-gray-100 rounded object-cover h-full w-24"
                            />
                            <img 
                            width={100} height={100}
                            src="/img/graphics-card2.webp"
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="bg-gray-100 rounded object-cover h-full w-24"
                            />
                            <img
                            width={100} height={100}
                            src="/img/graphics-card.webp"
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="bg-gray-100 rounded object-cover h-full w-24"
                            />
                            <img
                            width={100} height={100}
                            src="/img/graphics-card2.webp"
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="bg-gray-100 rounded object-cover h-full w-24"
                            />
                            <img
                            width={100} height={100}
                            src="/img/more-icon-1.png"
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="bg-gray-100 rounded object-cover h-full w-24"
                            />
                        </div>
                    </div>


                </div>


            
                {/* item detail */}
                <div className="grid grid-col-2 lg:gap-4">

                    <div className="p-6 max-w-7xl rounded-lg shadow-md">

                        <div>
                            <h2 className="font-['SoleiiBold'] tracking-normal text-black sm:text-lg">EVGA RTX 3090 FTW3 Ultra Gaming 24GB GDDR6X</h2>
                            <p className="text-base mt-1 text-gray-900">
                                Category : Computer
                            </p>
                            <p className="text-base mt-1 text-gray-900">
                                Brand : EVGA
                            </p>
                        </div>

                        <div className="pt-6">
                            <h2 className="font-['SoleiiBold'] tracking-normal text-black sm:text-lg">Price : 19,000 - 32,000 Bath</h2>
                            <p className="text-md mt-1 text-gray-900">
                            Lastest when : 22 Dec 2021
                            </p>
                        </div>
                        
                    </div>


                    <div className="p-6 max-w-7xl rounded-lg shadow-md">

                        <div>
                            <div class="flex items-center">
                                <img class="w-12 h-12 rounded-full mr-6" src="/img/exploding-head.png" alt="Avatar of Jonathan Reinink" />
                                <div>

                                    <div className="pb-1">
                                    <h2 className="font-['SoleiiBold'] font-black text-lime-500 sm:text-xl">GOOD PRODUCT</h2>
                                    </div>

                                    <div>
                                        <p class="text-base text-black leading-none font-bold tracking-wide">By : Jonathan Reinink</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h2 className="font-['SoleiiBold'] pb-4 tracking-normal text-black sm:text-lg">How graphics card bundles are both hurting and helping during the GPU shortage</h2>
                            <p className="text-base mt-1 text-gray-900">
                            GPU bundles have been one of the only ways to buy a graphics card in 2021, and they’ve been met with a mixed reception. Claims of endless profiteering and offloading undesirable products have run amok, painting retailers as nothing more than money-hungry entities that are capitalizing on a bad situation.
                            </p>
                            <p className="text-base mt-4 text-gray-900">
                            There’s a thread of truth to that, but after talking with market experts and retailers, I’m convinced that GPU bundles help more than they hurt. Although there isn’t a magic bullet to solve the GPU shortage, retailers can make cards easier to find by bundling graphics cards with other products.                        </p>
                        </div>

                    </div>

                </div>

            </div>

            {/* <div className="px-8 flex flex-wrap sm:gap-6"> */}
            {/* <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-8 gap-x-2 sm:px-6 sm:pt-2 sm:py-16 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-3">

                <CommentForm/>
                <CommentOnPost/>
                <CommentOnPost/>
                <CommentOnPost/>
                <CommentOnPost/>

            </div> */}

        </div>
    )
}