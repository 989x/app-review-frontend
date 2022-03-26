import Image from "next/image"
import React, { useContext } from "react"
import { Context } from "../../context/Context"
import Link from 'next/link'

function Navbar() {
  const {user, dispatch} = useContext(Context);

  const PF = "http://localhost:5001/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  
  return (
    <div className="bg-white border-gray-200 px-2 sm:px-12 pt-4 pb-2 rounded dark:bg-white sticky top-0 z-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto">

        <a href="/" className="flex">
          <div className="pr-4">
            <img 
              src="/img/exploding-head.png" 
              width={30} 
              height={30}
            />
          </div>
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-black">Product Review</span>
        </a>
        
        <div className="flex md:order-1">
            <div className="hidden relative mr-3 md:mr-0 md:block w-80">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input 
                type="text" 
                id="email-adress-icon" 
                className="block p-2 pl-10 w-full text-gray-900 rounded-lg border sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:border-gray-300 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Search . . ." 
              />
            </div>

            <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>

        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-2" id="mobile-menu-3">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
           
           <div>


           </div>

            { user ? (
              <Link href="/SubmitReview">
                <li className="pt-3">
                  <a 
                    className="text-base block object-cover pt-2 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    WRITE REVIEW
                  </a>
                </li>
              </Link>

            ) : (
                <div>
                  {/* <li className="pt-3">
                    <a href=""></a>
                  </li> */}
                </div>
              )
            }

            <li  
              className="pt-3"
              onClick={handleLogout}
            >
              <Link href="/">
                <a className="text-base block object-cover pt-2 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {user && "LOGOUT"}
                </a>
              </Link>

            </li>

            {
              user ? (
                <div>
                  <Link href="/SettingProfile">
                    {
                      user.profilePic ? (
                        <img
                          className="w-12 h-12 rounded-full object-cover cursor-pointer"
                          src={PF + user.profilePic}
                          alt=""
                        />
                      ) : (
                        <img
                        className="w-12 h-12 rounded-full object-cover cursor-pointer"
                        src="img/brawl-stars-icon-clipart.png"
                        alt=""
                      />
                      )
                    }
                  </Link>

                </div>
              ) : (
                <li className="pt-3">
                  <a 
                    href="/LoginScreen" 
                    className="text-base block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    LOGIN
                  </a>
                </li>
              )
            }
          </ul>
        </div>

      </div>
    </div>
	)
}

export default Navbar
