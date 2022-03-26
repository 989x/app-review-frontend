import React, { useState, useEffect, useContext } from 'react'
import {useRouter} from 'next/router'
import axios from "axios";
import { Context } from "../../../context/Context";

// comment
import { CommentPost } from '../../../components/CommentProduct/commentpost';

export default function Example() {

    const PF = "http://localhost:5001/images/";

    const [username, setUsername] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const [realName, setRealName] = useState('')
    const [typeOrCategory, setTypeOrCategory] = useState('')
    const [brandOrCompany, setBrandOrCompany] = useState('')
    const [goodOrNot, setGoodOrNot] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [photo, setPhoto] = useState('')
    const [_id, setID] = useState(null);

    const { user } = useContext(Context);

    //------------------------------------------------------------------------------------------------
    // for update
    const router = useRouter()
    useEffect(() => {
        if (router.query.id) {

            axios.get(`http://localhost:5001/api/products/${router.query.id}`)

            .then((getData) => {
                console.log(getData.data._id)

                setID(getData.data._id);

                setUsername(getData.data.username);
                setProfilePic(getData.data.profilePic);

                setRealName(getData.data['realName']);
                setTypeOrCategory(getData.data['typeOrCategory']);
                setBrandOrCompany(getData.data['brandOrCompany']);
                setGoodOrNot(getData.data.goodOrNot);
                setTitle(getData.data.title);
                setMessage(getData.data.message);
                setCreatedAt(getData.data.createdAt);

                setPhoto(getData.data.photo)
                console.log(getData.data)
            })
            console.log(router.query._id)
        }
    }, [router.query.id])

    //------------------------------------------------------------------------------------------------
    // for delete
    const onDelete = () => {
        if(window.confirm('Do you want to delete')){
            axios.delete(`http://localhost:5001/api/products/${router.query.id}`, {data: {username: user.username}})
            , window.location.href="http://localhost:4000/";
            // .get(() => {
            //     getData();
            // })
        }
    }

    //------------------------------------------------------------------------------------------------
    // Comment Product
    const [comment, setComment] = useState('')

    const handleComment = async(e) => {
        e.preventDefault()
        try {
            const commment = await axios.post(`http://localhost:5001/api/products/${router.query.id}/comments/create`,{
                comment,
                // comment,
                // product_id: product_id,
                product_id: _id,
                // user_id: req.body.user_id
                user_id: user._id
            })
            window.location.reload()
            console.log(commment)
        } catch(err) {
            console.log(err)
        }
    }

    //------------------------------------------------------------------------------------------------
    return (
        <div className="bg-white">
            <div>

                {/* nav bar item */}
                <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-4 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2">
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
                <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-16 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2">

                    {/* item img */}
                    <div>
                        <div className="grid grid-col-2 sm:gap-6 lg:gap-8 justify-items-center">

                            {
                                photo ? (
                                    <img
                                        src={PF + photo}
                                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                        className="bg-gray-100 rounded w-11/12"
                                    />
                                ) : (
                                    <img
                                        className="w-80 h-80 "
                                        src="/img/No_image_available.png"
                                        alt=""
                                    />
                                )
                            }

                            {/* <img
                            src={PF + photo}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="bg-gray-100 rounded w-11/12"
                            /> */}

                            {/* <div className="flex sm:gap-4 justify-around">
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
                            </div> */}
                        </div>
                    </div>

                    {/* item detail */}
                    <div className="grid grid-col-2 lg:gap-4">

                        {username === user?.username && (

                            <div className="p-6 max-w-7xl">
                                <div className="flex space-x-6 justify-end">
                                    <div className="pt-2 pr-4 font-bold text-xl">
                                        About your review
                                    </div>
                                    <a
                                        href={`/review/${router.query.id}/update`}
                                        className="font-medium py-2 px-4 rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    // this here ---------------
                                        // onClick={ setData(nameProduct, aboutProduct, brandProduct, choice, title, message)}
                                        
                                        // onClick={() => test()}
                    // this here ---------------
                                    >
                                        Edit
                                    </a>

                                    <a 
                                        // href="/"
                                        className="font-medium py-2 px-4 rounded-lg bg-red-500 hover:bg-red-800 text-white"
                                        onClick={() => onDelete(router.query.id)}
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>

                        )}

                        <div className="p-6 max-w-7xl rounded-lg shadow-md">

                            <div>
                                <h2 
                                    value={realName}
                                    onChange={(e) => setRealName(e.target.value)}
                                    className="font-['SoleiiBold'] tracking-normal text-black sm:text-lg"
                                >
                                    {realName}
                                </h2>
                                <p 
                                    value={typeOrCategory}
                                    onChange={(e) => setTypeOrCategory(e.target.value)}
                                    className="text-base mt-1 text-gray-900"
                                >
                                    {typeOrCategory}
                                </p>
                                <p 
                                    value={brandOrCompany}
                                    onChange={(e) => setBrandOrCompany(e.target.value)}
                                    className="text-base mt-1 text-gray-900"
                                >
                                    {brandOrCompany}
                                </p>
                            </div>

                            <div className="pt-6">
                                <h2 className="font-['SoleiiBold'] tracking-normal text-black sm:text-lg">Price : 19,000 - 32,000 Bath</h2>
                                <p 
                                    className="text-md mt-1 text-gray-900"
                                    value={createdAt}
                                    onChange={(e) => setCreatedAt(e.target.value)}
                                    >
                                Lastest when : {createdAt}
                                </p>
                            </div>
                            
                        </div>


                        <div className="p-6 max-w-7xl rounded-lg shadow-md">

                            <div>
                                <div className="flex items-center">
                                    <img className="w-12 h-12 rounded-full mr-6" src={PF + profilePic} alt="Avatar of Jonathan Reinink" />
                                    <div>

                                        <div className="pb-1">
                                        <h2 
                                            value={goodOrNot}
                                            onChange={(e) => setGoodOrNot(e.target.value)}
                                            className={`font-['SoleiiBold'] font-black ${goodOrNot == "GOOD PRODUCT" ? "text-lime-500" : "text-red-600" } sm:text-xl`}
                                        >
                                            {goodOrNot}
                                        </h2>
                                        </div>

                                        <div>
                                            <p 
                                                className="text-base text-black leading-none font-bold tracking-wide"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            >By : {username}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h2 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="font-['SoleiiBold'] pb-4 tracking-normal text-black sm:text-lg"
                                >
                                    {title}
                                </h2>
                                <p 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="text-base mt-1 text-gray-900"
                                >
                                    {message}
                                </p>
                                
                            </div>

                        </div>

                    </div>

                </div>
                
        {/* comment ----------------------------------- ----------------------------------- -----------------------------------  */}
                
                <div class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pb-16 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2">
                {/* <div class="flex mx-auto items-center justify-center shadow-lg mb-4 max-w-xl"> */}
                    <div class="mx-3 mb-6">
                        <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                        <div class="w-full md:w-full px-3 mb-2 mt-2">
                            <textarea 
                                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" 
                                name="body" 
                                placeholder='Type Your Comment' 
                                required

                                onChange = {(e) => setComment(e.target.value)}
                                value = {comment}
                            />
                        </div>
                        <div class="w-full md:w-full flex items-start px-3">
                            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                            <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                            </div>
                            <div class="-mr-1">
                            <input 
                                type='submit' 
                                class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" 
                                value='Post Comment'

                                onClick = {handleComment}
                            />
                            </div>
                        </div>

                    </div>



                    <div className="">
                        {router.query.id && (
                            <CommentPost 
                                comment={router.query.id}
                                class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pb-16 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-2"
                            />  
                        )}

                    </div>





{/* 
                    <div class="mx-3 mb-6">
                        <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                        <div class="w-full md:w-full px-3 mb-2 mt-2">
                            <textarea 
                                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" 
                                name="body" 
                                placeholder='Type Your Comment' 
                                required

                                onChange = {(e) => setComment(e.target.value)}
                                value = {comment}
                            />
                        </div>
                        <div class="w-full md:w-full flex items-start px-3">
                            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                            <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                            </div>
                            <div class="-mr-1">
                            <input 
                                type='submit' 
                                class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" 
                                value='Post Comment'

                                onClick = {handleComment}
                            />
                            </div>
                        </div>

                    </div>

                    <div class="mx-3 mb-6">
                        <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                        <div class="w-full md:w-full px-3 mb-2 mt-2">
                            <textarea 
                                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" 
                                name="body" 
                                placeholder='Type Your Comment' 
                                required

                                onChange = {(e) => setComment(e.target.value)}
                                value = {comment}
                            />
                        </div>
                        <div class="w-full md:w-full flex items-start px-3">
                            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                            <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                            </div>
                            <div class="-mr-1">
                            <input 
                                type='submit' 
                                class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" 
                                value='Post Comment'

                                onClick = {handleComment}
                            />
                            </div>
                        </div>

                    </div> */}




                </div>



            </div>                    
        </div>
    )
}