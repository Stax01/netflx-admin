import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchSingIn } from '../../store/auth/authActionCreator'
import './login.scss'
const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
   
    const onHandleLogin = (e) => {
        e.preventDefault();
        let postData = {
            email,
            password
        }
        dispatch(fetchSingIn(postData))
    }
    return (
        <div className='login'>
            <form className="wrapper">
                <h3>Войти в аккаунт</h3>
                <label>Почта</label>
                <input
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                    type="text" />
                    <label htmlFor="">Пароль</label>
                <input
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={password}
                    type="text" />
                <button onClick={onHandleLogin}>Войти</button>
            </form>
        </div>
    )
}

export default Login
