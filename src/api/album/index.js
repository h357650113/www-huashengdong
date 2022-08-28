import api from '../util'

export const getAlbums = async () => {
    try {
        const response = await api.get(`/albums/2`)
        return response
    } catch (error) {
        console.log('error', error)
        return false
    }
}

export const getAlbumItems = async ({ id }) => {
    try {
        const response = await api.get(`/album/${id}`)
        return response
    } catch (error) {
        console.log('error', error)
        return false
    }
}
