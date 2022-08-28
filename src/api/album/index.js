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
