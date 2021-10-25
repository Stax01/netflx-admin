import { movieApi } from "../../api/movie"
import { ADD_MOVIE, DELET_MOVIE, FETCH_MOVIE_ALL,  SET_MOVIE_ALL } from "./movieReducer"


const addMovieAC = (data) => ({ type: ADD_MOVIE, payload: data })
const fetchMovieAll = () => ({ type: FETCH_MOVIE_ALL })
const deletMovieAC = (id) => ({ type: DELET_MOVIE, payload: id })

const setMovieAllAC = (data) => ({ type: SET_MOVIE_ALL, payload: data })


export const fetchMovieAllRequest = () => async (dispatch) => {
    try {
        dispatch(fetchMovieAll())
        const data = await movieApi.MovieAll()

        dispatch(setMovieAllAC(data))

    } catch (error) {
        console.log('Ошибка при получение всех видео')
    }
}
export const fetchDeletMovieRequest = (id) => async (dispatch) => {
    try {
        await movieApi.MovieDelete(id)
        dispatch(deletMovieAC(id))

    } catch (error) {
        console.log('Ошибка при удаление видео')
    }
}

export const fetchCreatorMovieRequest = (movie) => async (dispatch) => {
    try {
      
        const data = await movieApi.MovieCreate(movie)
        dispatch(addMovieAC(data))
        
    } catch (error) {
        console.log("Ошибка при создание видео")
    }
}