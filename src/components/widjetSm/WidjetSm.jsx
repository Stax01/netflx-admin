import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './widjetSm.scss'
const WidjetSm = () => {
    return (
        <div className='widjetSm'>
            <h3>Новые пользователи</h3>
            <ul className='list'>
                <li className="itemSm">
                    <img src="/img/photo-user.jpg" alt="" />
                    <div className='userInfo'>
                        <div className='username'>Александр Петров</div>
                        <span>Инженер-программист</span>
                    </div>
                    <button>
                        <RemoveRedEyeIcon className='icon' />
                        <span>Посмотреть</span>
                    </button>
                </li>
                <li className="itemSm">
                    <img src="/img/photo-user.jpg" alt="" />
                    <div className='userInfo'>
                        <div className='username'>Александр Петров</div>
                        <span>Инженер-программист</span>
                    </div>
                    <button>
                        <RemoveRedEyeIcon className='icon' />
                        <span>Посмотреть</span>
                    </button>
                </li>
                <li className="itemSm">
                    <img src="/img/photo-user.jpg" alt="" />
                    <div className='userInfo'>
                        <div className='username'>Александр Петров</div>
                        <span>Инженер-программист</span>
                    </div>
                    <button>
                        <RemoveRedEyeIcon className='icon' />
                        <span>Посмотреть</span>
                    </button>
                </li>
                <li className="itemSm">
                    <img src="/img/photo-user.jpg" alt="" />
                    <div className='userInfo'>
                        <div className='username'>Александр Петров</div>
                        <span>Инженер-программист</span>
                    </div>
                    <button>
                        <RemoveRedEyeIcon className='icon' />
                        <span>Посмотреть</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidjetSm
