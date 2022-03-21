import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context';

import {useRouter} from 'next/router'
import axios from "axios";

function Cardd(props) {
    
    // console.log(props)
    const { user } = useContext(Context);
    const [updateMode, setUpdateMode] = useState(false)
    const [commentData, setCommentData] = useState(props.comment.comment);
    
    const PF = "http://localhost:5001/images/";

    const router = useRouter()

    // console.log("comment id :" + props.comment._id)
    // console.log("user id :" + props.comment.user._id)
    // console.log("router.query.id :" + router.query.id)

    // UPDATE Data
    const handleUpdate = async() => {
        // console.log("handleUpdate")
        // console.log("req.body.user_id : " + req.body.user_id)

        try {
            await axios.put(`http://localhost:5001/api/products/comments/${props.comment._id}/update`, {
                user_id: props.comment.user._id,
                comment: commentData,
            });

            setUpdateMode(false)
        } catch(err) {
            console.log(err)
        }
    }

    // ----------------------------------- ----------------------------------- -----------------------------------
    // DETELE Data
    const handleDelete = async() => {
        // console.log("comment_id : " + props.comment._id)
        // console.log("user_id : " + props.comment.user._id)
        
        try {
            await axios.delete(`http://localhost:5001/api/products/comments/${props.comment._id}/delete`);
            // window.location.replace("/");
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className="grid grid-col-2 lg:gap-4">

            <div className="p-6 max-w-7xl rounded-lg shadow-md">
                <div>
                    <div className="flex items-center">
                        <img className="w-12 h-12 rounded-full mr-6" src={PF + props.comment.user.profilePic} alt="Avatar" />
                        <div>
                            <div className="pb-2">
                                <p 
                                    className="text-base text-black leading-none font-bold tracking-wide"
                                    // value={username}
                                    // onChange={(e) => setUsername(e.target.value)}
                                >Username : {props.comment.user.username} </p>
                            </div>
                            <div>
                                <p 
                                    className="text-base text-black tracking-wide"
                                    // value={username}
                                    // onChange={(e) => setUsername(e.target.value)}
                                >When : {props.comment.user.createdAt} </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    {updateMode ? (
                        <textarea
                            value = {commentData}
                            onChange = {(e) => setCommentData(e.target.value)}
                        />
                    ) : (
                        <p 
                            className="text-base mt-1 text-gray-900"
                        >
                            {props.comment.comment}
                        </p>      
                    )}
                </div>

                {props.comment.user.username === user?.username && ( 
                    <div>
                        {updateMode ? (
                            <div className="pt-6 max-w-7xl">
                                <div className="flex space-x-6 justify-end">
                                    <button 
                                        className="text-small py-2 px-2 rounded text-white bg-green-500 hover:bg-green-800" 
                                        onClick={handleUpdate}
                                    >
                                        Update
                                    </button>

                                    <button 
                                            className="text-small py-2 px-2 rounded text-white bg-red-500 hover:bg-red-800"
                                            onClick={handleDelete}
                                        >
                                            Delete
                                        </button>
                                </div>
                            </div>
                        ) : (
                            <div className="pt-6 max-w-7xl">
                                <div className="flex space-x-2 justify-end">
                                    <div>
                                        <button
                                            // href={`/review/${}/update`}
                                            className="mr-4 font-small py-2 px-2 rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            onClick={() => setUpdateMode(true)}
                                        >
                                            Edit
                                        </button>
                                        {/* <button 
                                            className="text-small py-2 px-2 rounded text-white bg-red-500 hover:bg-red-800"
                                            onClick={handleDelete}
                                        >
                                            Delete
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )} 

                {/* {   updateMode && (
                    <button className="" onClick={handleUpdate}>Update</button>
                ) 
                } */}

            </div>
            </div>

        </div>
    )
}

export default Cardd
