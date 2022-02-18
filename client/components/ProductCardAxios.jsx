import React, { useEffect, useState } from 'react'
import styles from "../styles/ProductList.module.css";


import axios from "axios";

const ProductCardAxios = () => {

    // new

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3100/product`)
        .then((getData) => {
            setApiData(getData.data);
        })
    }, [])

    const setData = (nameProduct, aboutProduct, brandProduct, choice, title, message, id) => {
        console.log(id);
        localStorage.setItem('nameProduct', nameProduct)
        localStorage.setItem('aboutProduct', aboutProduct)
        localStorage.setItem('brandProduct', brandProduct)
        localStorage.setItem('choice', choice)
        localStorage.setItem('title', title)
        localStorage.setItem('message', message)

    }
    
    // new

    return (
        
        <div className={styles.wrapper}>

            {apiData.map((data) => {

                return (
    
                    <div class="p-2 max-w-xs">

                        <div class="bg-white rounded-lg shadow-md">


                            <div>
                                <a href="#">
                                    <img className="rounded-t-lg object-cover h-36 w-full" src="/img/nvidia-geforce-rtx-3080-12.jpeg" alt="" />
                                </a>
                            </div>

                            <div class="p-5">

                                <a href="#">
                                    <h5 class="font-['SoleiiBold'] mb-2 text-base font-bold tracking-wide text-gray-900">{data.nameProduct}</h5>
                                </a>

                                <div className="pb-4">
                                    <div className={`font-['SoleiiBold'] text-sm ${data.choice == "GOOD PRODUCT" ? "text-lime-500" : "text-red-600" } leading-none tracking-wide`}>
                                        {data.choice}
                                    </div>
                                </div>

                                <a href="#">
                                    <h5 class="font-['SoleiiBold'] mb-2 text-base text-gray-900">{data.title}</h5>
                                </a>

                                <p class="mb-3 text-sm text-gray-900">{data.message}</p>
                                
                                <div class="pt-3 pb-3">
                                    <div class="flex items-center">
                                        <img class="w-6 h-6 rounded-full mr-4" src="/img/exploding-head.png" alt="Avatar of Jonathan Reinink" />
                                        <div class="text-sm">
                                            <p class="text-sm text-gray-900">Jonathan Reinink</p>
                                            <p class="text-sm text-gray-900">Aug 18</p>
                                        </div>
                                    </div>
                                </div>

                            
                                
                                <div className="flex flex-row-reverse">
                                    <a 
                                        onClick={() => setData(data.nameProduct, data.aboutProduct, data.brandProduct, data.choice, data.title, data.message)}
                                        href="/review/1" 
                                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Read more
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                    
                    
                )
            })}


        </div>
    )
}

export default ProductCardAxios

