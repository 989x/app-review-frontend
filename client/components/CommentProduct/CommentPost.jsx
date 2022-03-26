import React, { useContext, useEffect, useState } from 'react'

import axios from "axios";
import { Context } from '../../context/Context';
import Cardd from './Cardd';

export const CommentPost = (props) => {

    const [commentData, setCommentData] = useState([]);
    // const { user } = useContext(Context);
    // const PF = "http://localhost:5001/images/";

    // const [updateMode, setUpdateMode] = useState(false)

    // GET Data
    useEffect(() => {
        console.log("data :"+ props.comment)
        if (props.comment) {
            axios.get(`http://localhost:5001/api/products/${props.comment}/comments`)
            .then((getData) => {
                setCommentData(getData.data.data.comments)
                console.log(getData.data.data.comments)
            })
        }
    }, [])

    // // UPDATE Data
    // const handleUpdate = async() => {
    //     try {
    //         await axios.put(`http://localhost:5001/api/products/comments/${router.query.id}/update`, {
    //             user_id ,
    //             comment
    //         });
    //         setUpdateMode(false)
    //     } catch(err) {}
    // }

    // const setData = (comment, product_id, user_id) => {
    //     console.log(comment)
    //     localStorage.setItem('comment', comment)
    //     localStorage.setItem('product_id', product_id)
    //     localStorage.setItem('user_id', user_id)
    // }

    return (
        <div>
            {commentData.map((data) => {
                return (

                // <div className="grid grid-col-2 lg:gap-4">

                //         <div className="p-6 max-w-7xl rounded-lg shadow-md">
                //             <div>
                //                 <div className="flex items-center">
                //                     <img className="w-12 h-12 rounded-full mr-6" src={PF + data.user.profilePic} alt="Avatar" />
                //                     <div>
                //                         <div className="pb-2">
                //                             <p 
                //                                 className="text-base text-black leading-none font-bold tracking-wide"
                //                                 // value={username}
                //                                 // onChange={(e) => setUsername(e.target.value)}
                //                             >Username : {data.user.username} </p>
                //                         </div>
                //                         <div>
                //                             <p 
                //                                 className="text-base text-black tracking-wide"
                //                                 // value={username}
                //                                 // onChange={(e) => setUsername(e.target.value)}
                //                             >When : {data.user.createdAt} </p>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>

                //             <div className="pt-8">
                //                 {updateMode ? (
                //                     <textarea
                //                         value = {data.comment}
                //                         onChange = {(e) => setCommentData(e.target.value)}
                //                     />
                //                 ) : (
                //                     <p 
                //                         className="text-base mt-1 text-gray-900"
                //                     >
                //                         {data.comment}
                //                     </p>      
                //                 )}
                //             </div>

                //             {data.user.username === user?.username && ( 
                //                 <div className="pt-6 max-w-7xl">
                //                     <div className="flex space-x-2 justify-end">
                //                         <div className="pt-2 text-sm">
                //                             Your comment
                //                         </div>
                //                         <a
                //                             // href={`/review/${}/update`}
                //                             className="font-small py-2 px-2 rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                //                             onClick={() => setUpdateMode(true)}
                //                         >
                //                             Edit
                //                         </a>

                //                         <a 
                //                             className="text-small py-2 px-2 rounded text-white bg-red-500 hover:bg-red-800"
                //                             onClick={() => onDelete(router.query.id)}
                //                         >
                //                             Delete
                //                         </a>
                //                     </div>
                //                 </div>
                //             )} 

                //         </div>
                //     </div>

                    <Cardd comment={data}/>
                    
                )
            })}

        </div>
       
    )
}
