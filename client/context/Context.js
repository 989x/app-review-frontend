import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

// const getLocalItems = () => {
//     let user = localStorage.getItem('user');
//     console.log(user);

//     if(user) {
//         return JSON.parse(localStorage.getItem('user'));
//     } else {
//         return [];
//     }
// }

const INITIAL_STATE = {
    //? why error ?
    user: process.browser?JSON.parse(localStorage.getItem("user")) : null,
    isFetching: false,
    error: false,
    
}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    console.log(dispatch)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user])

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    )
}