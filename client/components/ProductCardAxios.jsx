import React, { useContext, useEffect, useState } from 'react'
import styles from "../styles/ProductList.module.css";

import axios from "axios";
import { Context } from '../context/Context';

const ProductCardAxios = () => {

    const PF = "http://localhost:5001/images/";
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/products`)
        .then((getData) => {
            setApiData(getData.data);
        })
    }, [])

    const setData = (_id, username, realName, typeOrCategory, goodOrNot, title, message, createdAt, photo, productComment) => {
        console.log(_id);
        // console.log(productComment);

        localStorage.setItem('username', username)
        // localStorage.setItem('profilePic', profilePic)
        
        localStorage.setItem('realName', realName)
        localStorage.setItem('typeOrCategory', typeOrCategory) 
        // localStorage.setItem('brandOrCompany', brandOrCompany) 
        localStorage.setItem('goodOrNot', goodOrNot)
        localStorage.setItem('Title', title)
        localStorage.setItem('message', message)
        localStorage.setItem('createdAt', createdAt) 
        localStorage.setItem('photo', photo) 

        // new productComment
        localStorage.setItem('productComment', productComment) 
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
                                    {
                                        data.photo ? (
                                            <a href="#">
                                                <img className="rounded-t-lg object-cover h-36 w-full" src={PF + data.photo} alt="" />
                                            </a>
                                        ) : 
                                        (
                                            <div>

                                            </div>
                                        )
                                    }
                                </div>

                                <div className="p-5">

                                    <div className="h-16">
                                        <a href="#">
                                            <h5 className="min-h-max font-['SoleiiBold'] mb-2 text-base font-bold tracking-wide text-gray-900">{data.realName}</h5>
                                        </a>
                                    </div>

                                    <div className="pb-2">
                                        <div className={`font-['SoleiiBold'] text-sm ${data.goodOrNot == "GOOD PRODUCT" ? "text-lime-500" : "text-red-600" } leading-none tracking-wide`}>
                                            {data.goodOrNot}
                                        </div>
                                    </div>

                                    <div className="pb-3">
                                        <a href="#">
                                            <h5 className="h-11 font-['SoleiiBold'] mb-2 text-base text-gray-900 text-ellipsis overflow-hidden ...">{data.title}</h5>
                                        </a>
                                    </div>

                                    <p className="h-20 mb-1 text-sm text-gray-900 text-ellipsis overflow-hidden ...">{data.message}</p>
                                    
                                    <div className="pt-3 pb-3">
                                        <div className="flex items-center">
                                            <img className="w-9 h-9 rounded-full mr-4" src={PF + data.profilePic} alt="Avatar of Jonathan Reinink" />
                                            <div className="text-sm">
                                                <p className="text-sm text-gray-900">{data.username}</p>
                                                <p className="text-sm text-gray-900">{data.createdAt}</p>
                                            </div>
                                        </div>
                                    </div>
                    {/* setData ----    */}
                                    <div className="flex flex-row-reverse">
                                        <a 
                                            onClick={() => setData(setApiData)}
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

