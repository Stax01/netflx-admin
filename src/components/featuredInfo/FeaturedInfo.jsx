import React from 'react'
import './featuredInfo.scss'
const FeaturedInfo = () => {
    return (
        <div className='featuredInfo'>
            <div className="featuredInfoItem">
                <div className="title">Доход</div>
                <div className='center'>$2.421  <span>-11.4</span></div>
                <div className="bottom">Получаймый за последний месяц</div>
            </div>
            <div className="featuredInfoItem">
                <div className="title">Продажи</div>
                <div className='center'>$2.421  <span>-11.4</span></div>
                <div className="bottom">Получаймый за последний месяц</div>
            </div>
            <div className="featuredInfoItem">
                <div className="title">Стоимость</div>
                <div className='center'>$2.421  <span>-11.4</span></div>
                <div className="bottom">Получаймый за последний месяц</div>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
