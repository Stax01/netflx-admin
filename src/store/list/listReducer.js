export const FETCH_LIST_ALL = 'FETCH_LIST_ALL'
export const SET_LIST_ALL = 'SET_LIST_ALL'
export const ADD_NEW_LIST = 'ADD_NEW_LIST'

export const DELETE_LIST = 'DELETE_LIST'
const initialState = {
    list: [],
    isLoading: false
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_ALL:
            return {
                ...state,
                list: [],
                isLoading: true
            }
        case SET_LIST_ALL:
            return {
                ...state,
                list: action.payload,
                isLoading: false
            }
        case ADD_NEW_LIST:
            return {
                ...state,
                list: [...state.list, action.payload]

            }
        case DELETE_LIST:
            return {
                ...state,
                list: state.list.filter((list) => list._id !== action.paylyoad)

            }



        default:
            return state
    }
}


export default listReducer