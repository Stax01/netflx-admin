import React from 'react'
import { Link, useLocation } from "react-router-dom";

import './list.scss'


const List = () => {

    const location = useLocation()
    console.log(location)
    const list = location.list

    return (
        <div className='product'>
            <div className="productTitle">
                <h3>Product</h3>
                <Link to='/newList'>
                    <button>Создать</button>
                </Link>
            </div>
            <div className="productInfo">
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className='productInfoKey'>Название</span>
                        <span className='productInfoValue'>{list.title}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>Id:</span>
                        <span className='productInfoValue'>{list._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>Жанр:</span>
                        <span className='productInfoValue'>{list.genre}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>Тип:</span>
                        <span className='productInfoValue'>{list.type}</span>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <div className="productFormLeft">
                    <label>Название </label>
                    <input type="text" placeholder={list.title} />
                    <label>Жанр</label>
                    <input type="text" placeholder={list.genre} />
                    
                    <div className="productFormLeftBtn">
                        <button>Изменить</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default List
