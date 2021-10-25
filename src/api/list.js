import { instance } from "./auth"



export const listApi = {


    async crateList(list) {
        const { data } = await instance.post('lists', list)
        return data
    },
    async getListAll() {
        const { data } = await instance.get('lists')
        return data
    },
    async deleteList(id) {
        const { data } = await instance.delete('lists/' + id)
        return data
    }
}