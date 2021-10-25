import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import { Link } from 'react-router-dom'
import './sidebar.scss'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarBox">
                <h3>Dashborad</h3>
                <ul className='sidebarItems'>
                    <Link to='/'>
                        <li className='sidebarItem '>
                            <HomeOutlinedIcon />
                            <span>Главня</span>
                        </li>
                    </Link>
                    <li className='sidebarItem'>
                        <TimelineOutlinedIcon />
                        <span>Analyticks</span>
                    </li>
                    <li className='sidebarItem'>
                        <TrendingDownOutlinedIcon />
                        <span>Sales</span>
                    </li>

                </ul>
            </div>
            <div className="sidebarBox">
                <h3>Основное меню</h3>
                <ul className='sidebarItems'>
                    <Link to='/users'>
                        <li className='sidebarItem'>
                            <HomeOutlinedIcon />
                            <span>Польозователи</span>
                        </li>
                    </Link>
                    <Link  to='/movies'>
                        <li className='sidebarItem'>
                            <TimelineOutlinedIcon />
                            <span>Фильмы</span>
                        </li>
                    </Link>
                    <Link to='/newMovie'>
                        <li className='sidebarItem'>
                            <TrendingDownOutlinedIcon />
                            <span>Добавить фильм</span>
                        </li>
                    </Link>
                    <Link to='/lists'>
                        <li className='sidebarItem'>
                            <TrendingDownOutlinedIcon />
                            <span>Список</span>
                        </li>
                    </Link>
                    <Link to='/newList'>
                        <li className='sidebarItem'>
                            <TrendingDownOutlinedIcon />
                            <span>Добавить список</span>
                        </li>
                    </Link>
                    <li className='sidebarItem'>
                        <TrendingDownOutlinedIcon />
                        <span>Отчеты</span>
                    </li>
                </ul>
            </div>
            <div className="sidebarBox">
                <h3>Уведомления</h3>
                <ul className='sidebarItems'>
                    <li className='sidebarItem'>
                        <HomeOutlinedIcon />
                        <span>Почта</span>
                    </li>
                    <li className='sidebarItem'>
                        <TimelineOutlinedIcon />
                        <span>Обратная свзяь</span>
                    </li>
                    <li className='sidebarItem'>
                        <TrendingDownOutlinedIcon />
                        <span>Сообщения</span>
                    </li>

                </ul>
            </div>
            <div className="sidebarBox">
                <h3>Материалы</h3>
                <ul className='sidebarItems'>
                    <li className='sidebarItem'>
                        <HomeOutlinedIcon />
                        <span>Управлять</span>
                    </li>
                    <li className='sidebarItem'>
                        <TimelineOutlinedIcon />
                        <span>Анализирование</span>
                    </li>
                    <li className='sidebarItem'>
                        <TrendingDownOutlinedIcon />
                        <span>Отчеты</span>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Sidebar
