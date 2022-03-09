import CommentForm from "../../../components/Post/CommentForm"
import CommentOnPost from "../../../components/Post/CommentOnPost"
  
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import axios from "axios";

export default function Example() {

    // new

    const [nameProduct, setNameProduct] = useState('')
    const [aboutProduct, setAboutProduct] = useState('')
    const [brandProduct, setBrandProduct] = useState('')
    const [choice, setChoice] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [id, setID] = useState(null);

    // useEffect(() => {
    //     setID(localStorage.getItem('id'));

    //     setNameProduct(localStorage.getItem('nameProduct'));
    //     setAboutProduct(localStorage.getItem('aboutProduct'));
    //     setBrandProduct(localStorage.getItem('brandProduct'));
    //     setChoice(localStorage.getItem('choice'));
    //     setTitle(localStorage.getItem('title'));
    //     setMessage(localStorage.getItem('message'));
        
    // })

    // new

//------------//------------//------------//------------//------------//------------

    // for update

    const [apiData, setApiData] = useState([]);
    const router = useRouter()
    useEffect(() => {
        if (router.query.id) {

            axios.get(`http://localhost:3100/product/${router.query.id}`)
            .then((getData) => {
                console.log(getData.data.id)
                setID(getData.data.id);

                setNameProduct(getData.data['nameProduct']);
                setAboutProduct(getData.data['aboutProduct']);
                setBrandProduct(getData.data['brandProduct']);
                setChoice(getData.data.choice);
                setTitle(getData.data.title);
                setMessage(getData.data.message);
                console.log(getData.data)
            })
            console.log(router.query.id)
        }
    }, [router.query.id])

    // const setData = (nameProduct, aboutProduct, brandProduct, choice, title, message, id) => {
    //     // console.log("asd")
    //     if(process.browser){

    //         console.log(id);
    //         localStorage.setItem('nameProduct', nameProduct)
    //         localStorage.setItem('aboutProduct', aboutProduct)
    //         localStorage.setItem('brandProduct', brandProduct)
    //         localStorage.setItem('choice', choice)
    //         localStorage.setItem('title', title)
    //         localStorage.setItem('message', message)

    //     }
    // }

    // for update

//------------//------------//------------//------------//------------//------------

    // for delete

    // const getData = () => {
    //     axios.get(`http://localhost:3100/product/`)
    //     .get(() => {
    //         getData();
    //     })
    // }

    // const onDelete = () => {
    //     confirm('Do you want to delete')
    //     axios.delete(`http://localhost:3100/product/${router.query.id}`)
    //     // .get(() => {
    //     //     getData();
    //     // })
    // }

    const onDelete = () => {

        if(window.confirm('Do you want to delete')){
            axios.delete(`http://localhost:3100/product/${router.query.id}`), window.location.href="http://localhost:4000/";
            // .get(() => {
            //     getData();
            // })
        }
    }

    // for delete

    return (
        
        <div classNameName="bg-white">
            
            {/* {apiData.map((data) => {
                return ( */}

                    <div>


                        {/* nav bar item */}
                        <div classNameName="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-4 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2">
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                    <a href="#" className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-700">
                                        <svg className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                        <a href="#" className="ml-1 text-base tracking-wide font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-blue-700">Home</a>
                                    </a>
                                    </li>
                                    <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        <a href="#" className="ml-1 text-base tracking-wide font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-blue-700">Projects</a>
                                    </div>
                                    </li>
                                    <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        <span className="ml-1 text-base tracking-wide font-medium text-gray-400 md:ml-2 dark:text-gray-500">FlowBite</span>
                                    </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    
                        {/* item post */}
                        <div classNameName="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-16 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2">

                            {/* item img */}
                            <div>

                                <div classNameName="grid grid-col-2 sm:gap-6 lg:gap-8 justify-items-center">

                                    <img
                                    src="/img/nvidia-geforce-rtx-3080-12.jpeg"
                                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                    classNameName="bg-gray-100 rounded w-11/12"
                                    />

                                    <div classNameName="flex sm:gap-4 justify-around">
                                        <img 
                                        width={100} height={100}
                                        src="/img/graphics-card.webp"
                                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                                        classNameName="bg-gray-100 rounded object-cover h-full w-24"
                                        />
                                        <img 
                                        width={100} height={100}
                                        src="/img/graphics-card2.webp"
                                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                                        classNameName="bg-gray-100 rounded object-cover h-full w-24"
                                        />
                                        <img
                                        width={100} height={100}
                                        src="/img/graphics-card.webp"
                                        alt="Side of walnut card tray with card groove and recessed card area."
                                        classNameName="bg-gray-100 rounded object-cover h-full w-24"
                                        />
                                        <img
                                        width={100} height={100}
                                        src="/img/graphics-card2.webp"
                                        alt="Side of walnut card tray with card groove and recessed card area."
                                        classNameName="bg-gray-100 rounded object-cover h-full w-24"
                                        />
                                        <img
                                        width={100} height={100}
                                        src="/img/more-icon-1.png"
                                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                        classNameName="bg-gray-100 rounded object-cover h-full w-24"
                                        />
                                    </div>
                                </div>


                            </div>


                        
                            {/* item detail */}
                            <div classNameName="grid grid-col-2 lg:gap-4">

                                <div classNameName="p-6 max-w-7xl">
                                    <div classNameName="flex space-x-6 justify-end">
                                        <div classNameName="pt-2 pr-4 font-bold text-xl">
                                            About your review
                                        </div>
                                        <a
                                            href={`/review/${router.query.id}/update`}
                                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            // for update
    // this here ---------------
                                            // onClick={ setData(nameProduct, aboutProduct, brandProduct, choice, title, message)}
                                            
                                            // onClick={() => test()}
    // this here ---------------
                                            // for update
                                        >
                                            Edit
                                        </a>
    {/* delete ------------- */}
                                        <a 
                                            // href="/"
                                            className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => onDelete(router.query.id)}
                                        >
                                            Delete
                                        </a>
    {/* delete ------------- */}
                                    </div>
                                </div>

                                <div classNameName="p-6 max-w-7xl rounded-lg shadow-md">

                                    <div>
                                        <h2 
                                            value={nameProduct}
                                            onChange={(e) => setNameProduct(e.target.value)}
                                            classNameName="font-['SoleiiBold'] tracking-normal text-black sm:text-lg"
                                        >
                                            {nameProduct}
                                        </h2>
                                        <p 
                                            value={aboutProduct}
                                            onChange={(e) => setAboutProduct(e.target.value)}
                                            classNameName="text-base mt-1 text-gray-900"
                                        >
                                            {aboutProduct}
                                        </p>
                                        <p 
                                            value={brandProduct}
                                            onChange={(e) => setBrandProduct(e.target.value)}
                                            classNameName="text-base mt-1 text-gray-900"
                                        >
                                            {brandProduct}
                                        </p>
                                    </div>

                                    <div classNameName="pt-6">
                                        <h2 classNameName="font-['SoleiiBold'] tracking-normal text-black sm:text-lg">Price : 19,000 - 32,000 Bath</h2>
                                        <p classNameName="text-md mt-1 text-gray-900">
                                        Lastest when : 22 Dec 2021
                                        </p>
                                    </div>
                                    
                                </div>


                                <div classNameName="p-6 max-w-7xl rounded-lg shadow-md">

                                    <div>
                                        <div className="flex items-center">
                                            <img className="w-12 h-12 rounded-full mr-6" src="/img/exploding-head.png" alt="Avatar of Jonathan Reinink" />
                                            <div>

                                                <div classNameName="pb-1">
                                                <h2 
                                                    value={choice}
                                                    onChange={(e) => setChoice(e.target.value)}
                                                    classNameName={`font-['SoleiiBold'] font-black ${choice == "GOOD PRODUCT" ? "text-lime-500" : "text-red-600" } sm:text-xl`}
                                                >
                                                    {choice}
                                                </h2>
                                                </div>

                                                <div>
                                                    <p className="text-base text-black leading-none font-bold tracking-wide">By : Jonathan Reinink</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div classNameName="pt-8">
                                        <h2 
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            classNameName="font-['SoleiiBold'] pb-4 tracking-normal text-black sm:text-lg"
                                        >
                                            {title}
                                        </h2>
                                        <p 
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            classNameName="text-base mt-1 text-gray-900"
                                        >
                                            {message}
                                        </p>
                                        
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>                    
                {/* )
            })} */}


        </div>
    )
}