import React, { useEffect, useState } from 'react'
import styles from "../styles/ProductList.module.css";

import axios from "axios";

const ProductCardAxios = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        // axios.get(`http://localhost:3100/product`)
        axios.get(`http://localhost:5001/api/products`)
        .then((getData) => {
            setApiData(getData.data);
        })
    }, [])

    const setData = (_id, username, realName, typeOrCategory, goodOrNot, title, message, createdAt) => {
        console.log(_id);
        localStorage.setItem('username', username)
        localStorage.setItem('realName', realName)
        localStorage.setItem('typeOrCategory', typeOrCategory) 
        // localStorage.setItem('brandOrCompany', brandOrCompany) 
        localStorage.setItem('goodOrNot', goodOrNot)
        localStorage.setItem('Title', title)
        localStorage.setItem('message', message)
        localStorage.setItem('createdAt', createdAt) 
    }

    return (
        
        <div className={styles.wrapper}>
            {apiData.map((data) => {
                return (
    
                    <div className="pr-6">
                        {/* <div className="p-2 max-w-xs"> */}
                        <div className="pb-8 w-72">
                            <div className="bg-white rounded-lg shadow-md">

                                <div>
                                    <a href="#">
                                        <img className="rounded-t-lg object-cover h-36 w-full" src="/img/nvidia-geforce-rtx-3080-12.jpeg" alt="" />
                                    </a>
                                </div>

                                <div className="p-5">

                                    <div className="h-16">
                                        <a href="#">
                                            <h5 className="min-h-max font-['SoleiiBold'] mb-2 text-base font-bold tracking-wide text-gray-900">{data.realName}</h5>
                                        </a>
                                    </div>


                                    <div className="pb-4">
                                        <div className={`font-['SoleiiBold'] text-sm ${data.goodOrNot == "GOOD PRODUCT" ? "text-lime-500" : "text-red-600" } leading-none tracking-wide`}>
                                            {data.goodOrNot}
                                        </div>
                                    </div>

                                    <div className="h-20">
                                        <a href="#">
                                            <h5 className="font-['SoleiiBold'] mb-2 text-base text-gray-900">{data.title}</h5>
                                        </a>
                                    </div>

                                    <p className="h-20 mb-3 text-sm text-gray-900">{data.message}</p>
                                    
                                    <div className="pt-3 pb-3">
                                        <div className="flex items-center">
                                            <img className="w-6 h-6 rounded-full mr-4" src="/img/exploding-head.png" alt="Avatar of Jonathan Reinink" />
                                            <div className="text-sm">
                                                <p className="text-sm text-gray-900">{data.username}</p>
                                                <p className="text-sm text-gray-900">{data.createdAt}</p>
                                            </div>
                                        </div>
                                    </div>
    {/* setData ----    */}
                                    <div className="flex flex-row-reverse">
                                        <a 
                                            onClick={() => setData(data.username, data.realName, data.typeOrCategory, data.brandOrCompany, data.goodOrNot, data.title, data.message, data.createdAt)}
                                            href={`/review/${data._id}`}
                                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Read more
                                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </a>
                                    </div>

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

