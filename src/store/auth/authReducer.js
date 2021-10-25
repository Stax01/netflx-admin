export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const FETCH_SIGN_UP = 'FETCH_SIGN_UP'
export const LOGOUT = 'LOGOUT'
export const LOADING = 'LOADING'

const initialState = {
    user: null,
    isAuth: false,
    isLoading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: action.payload,
                isLoading: false
            }
        case FETCH_SIGN_UP:
            return {
                ...state,
                isAuth: true,
                isLoading: false
            }
        



        default:
            return state;
    }
}

export default authReducer