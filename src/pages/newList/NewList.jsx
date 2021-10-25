import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCreateListCreateRequest } from '../../store/list/listActionCreator'
import { fetchMovieAllRequest } from '../../store/movie/movieActionCreator'
import './newList.scss'

const NewList = () => {
    const dispatch = useDispatch()
    const [list, setList] = React.useState(null)
    const movies = useSelector(state => state.movie.items)

    const handleChange = (e) => {
        let value = e.target.value
        setList({...list, [e.target.name]: value})
    }
    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option)=> option.value)
        setList({...list, [e.target.name]: value})
    }
    React.useEffect(() => {
        dispatch(fetchMovieAllRequest())
    }, [dispatch])
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(fetchCreateListCreateRequest(list))
    }
    return (
        <div className='newProduct'>
            <h1>Добавить фильм</h1>
            <form className='addProductForm'>
                <div className="addProductItem">
                    <label>Название</label>
                    <input type="text"
                        name='title'
                        onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Жанар</label>
                    <input type="text"
                        name='genre'
                        onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Тип</label>
                    <select name="type" onChange={handleChange}>
                        <option>Type</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Content</label>
                    <select
                        multiple
                        name="content"
                        onChange={handleSelect}
                        style={{ height: "280px" }}
                    >
                        {movies.map((movie) => (
                            <option key={movie._id} value={movie._id}>
                                {movie.title}
                            </option>
                        ))}
                    </select>
                </div>

                <button  onClick={handleSubmit}>Создать</button>
            </form>
        </div>
    )
}

export default NewList
