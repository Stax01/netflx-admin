import React from 'react'
import { Link, useLocation } from "react-router-dom";
import PublishIcon from '@mui/icons-material/Publish';
import './movie.scss'


const Movie = () => {
    const location = useLocation()
    const movie = location.movie
    console.log(movie)
    return (
        <div className='product'>
            <div className="productTitle">
                <h3>Product</h3>
                <Link to='/newMovie'>
                <button>Создать</button>
                </Link>
            </div>


            <div className="productInfo">
                <div className="productInfoTop">
                    <img src={movie.img} alt="" />
                    <span>{movie.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className='productInfoKey'>Id:</span>
                        <span className='productInfoValue'>{movie._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>Жанр:</span>
                        <span className='productInfoValue'>{movie.genre}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>Год:</span>
                        <span className='productInfoValue'>{movie.year}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>Возраст:</span>
                        <span className='productInfoValue'>{movie.limit}</span>
                    </div>
                </div>


            </div>
            <div className="productBottom">
                <div className="productFormLeft">
                    <label>Название фильма</label>
                    <input type="text" placeholder={movie.title} />
                    <label>Год</label>
                    <input type="text" placeholder={movie.year} />
                    <label>Жанр</label>
                    <input type="text" placeholder={movie.genre} />
                    <label>Лимит</label>
                    <input type="text" placeholder={movie.limit} />
                    <label>Трейлер</label>
                    <input type="file" placeholder={'триллер'} />
                    <label>Видео</label>
                    <input type="file" placeholder={'видео'} />
                </div>
                <div className="productFormRight">
                    <div className="productFormRightImg">
                        <img src={movie.img} alt="" />
                        <label for='file'>
                            <PublishIcon className='icon'/>
                        </label>
                        <input type="file" id='file' style={{display: 'none'}} />
                    </div>

                    <button>Изменить</button>
                </div>

            </div>
        </div>
    )
}

export default Movie
