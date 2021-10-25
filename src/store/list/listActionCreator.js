
import { listApi } from "../../api/list"
import { ADD_NEW_LIST, DELETE_LIST, FETCH_LIST_ALL, SET_LIST_ALL } from "./listReducer"

const fetchListAll = () => ({ type: FETCH_LIST_ALL })
const setListAll = (data) => ({ type: SET_LIST_ALL, payload: data })
const addNewList = (data) => ({ type: ADD_NEW_LIST, payload: data })
const deleteList = (id) => ({ type: DELETE_LIST, payload: id })

export const fetchAllListRequest = () => async (dispatch) => {
    try {
        dispatch(fetchListAll())
        const data = await listApi.getListAll()
        dispatch(setListAll(data))
    } catch (error) {
        console.log("Ошибка при получение списка")
    }

}

export const fetchCreateListCreateRequest = (list) => async (dispatch) => {
    try {

        const data = await listApi.crateList(list)
        dispatch(addNewList(data))
    } catch (error) {
        console.log("Ошибка при создание нового списка")
    }
}

export const fetchDeleteListRequest = (id) => async (dispatch) => {
    try {

        await listApi.deleteList(id)
        dispatch(deleteList(id))
    } catch (error) {
        console.log("Ошибка при создание нового списка")
    }

}