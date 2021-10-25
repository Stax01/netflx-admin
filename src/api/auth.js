import axios from "axios"

export const instance = axios.create({
    headers: {
        token: "Bearer " + window.localStorage.getItem('token')
    }
})

export const ApiAuth = {

    async signIn(postData) {
        const { data } = await axios.post('auth/login', postData)
        return data
    },
    async signUp(postData) {
        const { data } = await axios.post('auth/register', postData)
        return data
    }
}