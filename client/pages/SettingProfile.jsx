import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function Example() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5001/images/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "UPDATE_START"})
        const updateUser = {
            userId: user._id,
            username,
            email,
            password
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            updateUser.profilePic = filename;
            try {
                await axios.post("http://localhost:5001/api/upload", data)
            } catch(err) { }
        }
        try {
            const res = await axios.put("http://localhost:5001/api/users/" + user._id, updateUser);
            setSuccess(true);
            dispatch({type: "UPDATE_SUCCESS", payload: res.data})
            
            console.log(res.data)
        } catch(err) {
            dispatch({type: "UPDATE_FAILURE"})
        }
    }

    return (
        <div className="max-w-fit mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-4 lg:max-w-screen-2xl lg:px-6 lg:grid-cols-1">
            <div className="mx-auto px-4 grid gap-y-16 gap-x-8 sm:px-6 sm:pt-6 sm:pb-4 lg:max-w-screen-lg lg:px-6">

                <div className="">
                    <div className="sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Update Proifle</h3>
                        <p className="mt-1 text-base text-gray-600 text">
                            update update update update update update 
                        </p>
                    </div>
                </div>
    
                <form className="md:col-span-8" onSubmit = {handleSubmit}>
                    <div>
                        <div className="shadow-md sm:rounded-md sm:overflow-hidden">
                            <div className="bg-white space-y-6 sm:p-6">

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                                    <div className="mt-1 flex items-center">
                                    <span className="inline-block h-28 w-28 rounded-full overflow-hidden bg-gray-100">
                                    
                                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                                    </span>
                                    <input
                                        onChange={(e) => setFile(e.target.files[0])}
                                        
                                        // style={{display:"none"}} 
                                        type="file"
                                        id="fileInput"
                                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    />
                                    
                                    </div>
                                </div>
                                
                                <div className="col-span-6">
                                    <label htmlFor="Username" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        placeholder={user.username}
                                        onChange = {(e) => setUsername(e.target.value)} 
                                        
                                        type="text"
                                        name="Username"
                                        id="Username"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        placeholder={user.email}
                                        onChange = {(e) => setEmail(e.target.value)} 

                                        type="text"
                                        name="Email"
                                        id="Email"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        onChange = {(e) => setPassword(e.target.value)} 

                                        type="text"
                                        name="Password"
                                        id="Password"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder=". . . "
                                    />
                                </div>

                            </div>

                            
                            {success && (
                                <div className="pb-4 text-center">
                                    <span className="text-green-500">Profile has been updated. . .</span>
                                </div>
                            )}

                            <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                                <button
                                    // onClick={handleSubmit}
                                    type="submit"
                                    className="w-40 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Update
                                </button>                                
                            </div>

                        </div>

                    </div>
                </form>
        
            </div>
        </div>
    )
}
