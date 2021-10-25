
import { instance } from "./auth";



export const movieApi = {
    async MovieCreate(movie) {
        const { data } = await instance.post('movies', movie)
        return data
    },
    async MovieAll() {
        const {data} = await instance.get('movies')
        return data
    },
    async MovieDelete(id) {
        const {data} = await instance.delete('movies/'+ id)
        return data
    }
}

