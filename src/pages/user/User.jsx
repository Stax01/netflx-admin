import React from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import './user.scss'
const User = () => {
    return (
        <div className='user'>
            <div className="userTop">
                <h3>Настройки пользователя</h3>
                <button>Добавить</button>
            </div>
            <div className="userWrapper">
                <div className="userBoxLeft">
                    <div className="username">
                        <img src="/img/ava.jpg" alt="" />
                        <div className='name'>

                            Иван Иванов
                            <div>Инженер-программист</div>
                        </div>
                    </div>
                    <ul className="dataInfo">
                        <h3>Данные аккаунта </h3>
                        <li>stax213</li>
                        <li>14.10.1994</li>
                    </ul>
                    <ul className="contactInfo">
                        <h3>Контактные данные</h3>
                        <li>+731235 523523</li>
                        <li>blablab@gmail.com</li>
                        <li>New York| USA</li>

                    </ul>
                </div>

                <div className="userBoxRight">
                    <div className="wrapper">
                        <div className="userEdit">
                            <h3>Редактирование</h3>
                            <div className="updateItem">
                                <label>Имя пользователя</label>
                                <input type="text" />
                            </div>
                            <div className="updateItem">
                                <label>Полное имя</label>
                                <input type="text" />
                            </div>
                            <div className="updateItem">
                                <label>Почта</label>
                                <input type="text" />
                            </div>
                            <div className="updateItem">
                                <label>Номер телефона</label>
                                <input type="text" />
                            </div>
                            <div className="updateItem">
                                <label>Адрес</label>
                                <input type="text" />
                            </div>
                            
                        </div>
                        <div className="userPhoto">
                            <div className="updatePhoto">
                            <img src="/img/ava.jpg" alt="" />
                            <ArrowCircleDownIcon className='icon'/>
                            </div>
                           <button>Изменить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
