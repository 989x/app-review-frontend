const Reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                user:null,
                isFetching: true,
                error:false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };        
        case "LOGIN_FAILUER":
            return {
                user: null,
                isFetching: false,
                error: true,
            }; 

        // logout
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
            }; 

        // upload img profiel
        case "UPDATE_START":
            return {
                ...state,
                isFetching:true
            };
        case "UPDATE_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };        
        case "UPDATE_FAILUER":
            return {
                user: state.user,
                isFetching: false,
                error: true,
            }; 

        default:
            return state;      
    }
}

export default Reducer;