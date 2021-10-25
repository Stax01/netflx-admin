export const ADD_MOVIE = 'ADD_MOVIE'
export const FETCH_MOVIE = 'FETCH_MOVIE'
export const SET_MOVIE_ALL = 'SET_MOVIE_ALL'
export const DELET_MOVIE = 'DELET_MOVIE'
export const FETCH_MOVIE_ALL = 'FETCH_MOVIE_ALL'

const initialState = {
    items: [],
    loaded: true,
    isFetching: false
}


 const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                items: [...state.items, action.payload],
                isFetching: false
            }
        case SET_MOVIE_ALL:
            return {
                ...state,
                items: action.payload,
                isFetching: false
            }
            case FETCH_MOVIE_ALL:
                return{
                    ...state,
                    items: [],
                    isFetching:true
                }
          
        case DELET_MOVIE:
            return{
                ...state,
                items: state.items.filter((movie)=> movie._id !== action.payload)
            }


        default:
            return state

    }

}

export default movieReducer