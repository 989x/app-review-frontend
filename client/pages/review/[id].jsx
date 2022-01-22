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
          
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">



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
                        src="/img/more-icon-3.jpeg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="bg-gray-100 rounded-lg"
                        />
                    </div>

                </div>

            

                <div>
                    <div>
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">EVGA RTX 3090 FTW3 Ultra Gaming 24GB GDDR6X</h2>
                        <p className="text-xl mt-1 text-gray-500">
                        # RTX # RTX3090 # Gaming
                        </p>
                    </div>

                    <div className="pt-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">Price : 19,000 - 32,000 Bath</h2>
                        <p className="text-xl mt-1 text-gray-500">
                        When : 22 Dec 2021
                        </p>
                    </div>

                    <div className="pt-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">How graphics card bundles are both hurting and helping during the GPU shortage</h2>
                        <p className="text-xl mt-1 text-gray-500">
                        GPU bundles have been one of the only ways to buy a graphics card in 2021, and they’ve been met with a mixed reception. Claims of endless profiteering and offloading undesirable products have run amok, painting retailers as nothing more than money-hungry entities that are capitalizing on a bad situation.
                        </p>
                        <p className="text-xl mt-4 text-gray-500">
                        There’s a thread of truth to that, but after talking with market experts and retailers, I’m convinced that GPU bundles help more than they hurt. Although there isn’t a magic bullet to solve the GPU shortage, retailers can make cards easier to find by bundling graphics cards with other products.                        </p>
                    </div>

                    
        
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                        </div>
                    ))}
                    </dl>
                </div>

                {/* <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a> */}

            </div>

        </div>
    )
}