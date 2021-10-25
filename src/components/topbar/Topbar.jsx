import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import './topbar.scss'



const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="left">
                <span>STAX ADMIN</span>
            </div>
            <div className="right">
                <div className="link">
                    <NotificationsNoneIcon className='icon' />
                    <span>5</span>
                </div>
                <div className="link">
                    <LanguageIcon className='icon' />
                    <span>2</span>
                </div>
                <div className="link">
                    <SettingsIcon className='icon' />
                </div>
                <img src="/img/photo.jpg" alt="" />
            </div>


        </div>
    )
}

export default Topbar
