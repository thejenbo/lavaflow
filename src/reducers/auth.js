const authReducerDefaultState = {
    isAuth: false,
    uid: null
};

export default (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isAuth: true,
                uid: action.uid
            }
        // case 'LOGIN_FAIL':
        //     return {
        //         ...state,
        //         logInError: action.error
        //     }
        case 'LOGOUT':
            return {
                isAuth: false
            }
        default:
            return state;
    }
}
