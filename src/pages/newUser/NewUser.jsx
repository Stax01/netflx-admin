import React from 'react'
import './newUser.scss'
const NewUser = () => {
    return (
        <div className='newUser'>
            <h3>Создание нового пользователя</h3>
            <div className="wrapper">
                <div className="left">
                    <div className="itemNewUser">
                        <label htmlFor="">Имя пользователя</label>
                        <input type="text" />
                    </div>
                    <div className="itemNewUser">
                        <label htmlFor="">Почта</label>
                        <input type="text" />
                    </div>
                    <div className="itemNewUser">
                        <label htmlFor="">Номер телефона</label>
                        <input type="text" />
                    </div>
                    <div className="itemNewUserGender">
                        <label htmlFor="">Пол</label>
                        <div className="gender">
                            <input type="radio" name="gender" id="male" value="male" />
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="female" value="female" />
                            <label for="female">Female</label>
                            <input type="radio" name="gender" id="other" value="other" />
                            <label for="other">Other</label>
                        </div>
                    </div>
                    <button>Создать</button>

                </div>
                <div className="right">
                    <div className="itemNewUser">
                        <label htmlFor="">Полное имя</label>
                        <input type="text" />
                    </div>
                    <div className="itemNewUser">
                        <label htmlFor="">Пароль</label>
                        <input type="text" />
                    </div>
                    <div className="itemNewUser">
                        <label htmlFor="">Адрес</label>
                        <input type="text" />
                    </div>
                    <div className="itemNewUser">
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUser
