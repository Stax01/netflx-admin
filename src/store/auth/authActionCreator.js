import { ApiAuth } from "../../api/auth"
import { LOGIN_SUCCESS } from "./authReducer"

const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, payload: data })

export const fetchSingIn = (postData) => async dispatch => {
    try {
        const data = await ApiAuth.signIn(postData)
        window.localStorage.setItem('token', data.accessToken)
        
        data.isAdmin && dispatch(loginSuccess(data))
    } catch (error) {
        console.log('Ошибка при авторизации')
    }
}