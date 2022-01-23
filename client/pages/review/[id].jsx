import CommentForm from "../../components/Post/CommentForm"
import CommentOnPost from "../../components/Post/CommentOnPost"

/* This example requires Tailwind CSS v2.0+ */
const features = [
    // { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    // { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    // { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    // { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
]
  
export default function Example() {
    return (
        
        <div className="bg-white">

            <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-4 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2">
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-700">
                            <svg class="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            <a href="#" class="ml-1 text-xl tracking-widest font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-blue-700">Home</a>
                        </a>
                        </li>
                        <li>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <a href="#" class="ml-1 text-xl tracking-widest font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-blue-700">Projects</a>
                        </div>
                        </li>
                        <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span class="ml-1 text-xl tracking-widest font-medium text-gray-400 md:ml-2 dark:text-gray-500">FlowBite</span>
                        </div>
                        </li>
                    </ol>
                </nav>
            </div>
          
            <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-16 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2">



                <div className="grid grid-col-2 sm:gap-6 lg:gap-8">

                    <img
                    src="/img/nvidia-geforce-rtx-3080-12.jpeg"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="bg-gray-100 rounded-lg"
                    />

                    <div className="flex justify-between">
                        <img className=""
                        width={130} height={130}
                        src="/img/nvidia-geforce-rtx-3080-12.jpeg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="bg-gray-100 rounded-lg"
                        />
                        <img
                        width={130} height={130}
                        src="/img/nvidia-geforce-rtx-3080-12.jpeg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="bg-gray-100 rounded-lg"
                        />
                        <img
                        width={130} height={130}
                        src="/img/nvidia-geforce-rtx-3080-12.jpeg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="bg-gray-100 rounded-lg"
                        />
                        <img
                        width={130} height={130}
                        src="/img/more-icon-2.jpeg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="bg-gray-100 rounded-lg"
                        />
                    </div>

                </div>

            

                <div>
                    <div>
                        <h2 className="text-2xl font-extrabold tracking-normal text-gray-800 sm:text-2xl">EVGA RTX 3090 FTW3 Ultra Gaming 24GB GDDR6X</h2>
                        <p className="text-xl mt-1 text-gray-800">
                        # RTX # RTX3090 # Gaming
                        </p>
                    </div>

                    <div className="pt-10">
                        <h2 className="text-2xl font-extrabold tracking-normal text-gray-800 sm:text-2xl">Price : 19,000 - 32,000 Bath</h2>
                        <p className="text-xl mt-1 text-gray-800">
                        When : 22 Dec 2021
                        </p>
                    </div>

                    <div className="pt-10">
                        <h2 className="text-2xl font-extrabold tracking-normal text-gray-800 sm:text-2xl">How graphics card bundles are both hurting and helping during the GPU shortage</h2>
                        <p className="text-xl mt-1 text-gray-800">
                        GPU bundles have been one of the only ways to buy a graphics card in 2021, and they’ve been met with a mixed reception. Claims of endless profiteering and offloading undesirable products have run amok, painting retailers as nothing more than money-hungry entities that are capitalizing on a bad situation.
                        </p>
                        <p className="text-xl mt-4 text-gray-800">
                        There’s a thread of truth to that, but after talking with market experts and retailers, I’m convinced that GPU bundles help more than they hurt. Although there isn’t a magic bullet to solve the GPU shortage, retailers can make cards easier to find by bundling graphics cards with other products.                        </p>
                    </div>

                    
                    {/* nothing here */}
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                        </div>
                    ))}
                    </dl>
                </div>

            </div>

            {/* <div className="px-8 flex flex-wrap sm:gap-6"> */}
            <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-8 gap-x-2 sm:px-6 sm:pt-2 sm:py-16 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-3">

                <CommentForm/>
                <CommentOnPost/>
                <CommentOnPost/>
                <CommentOnPost/>
                <CommentOnPost/>

            </div>

        </div>
    )
}