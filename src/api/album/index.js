import api from '../util'

export const getAlbums = async (search) => {
    try {
        const response = await api.get(`/albums/2`, { params: { search } })
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
export const getBlog = async ({ id }) => {
    try {
        const response = await api.get(
            `https://proto.huashengdong.com/api/open/blog?blogId=${id}`
        )
        return response
    } catch (error) {
        console.log('error', error)
        return false
    }
}
