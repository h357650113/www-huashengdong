import api from '../util'

export const getAlbumTags = async () => {
    try {
        const response = await api.get(`/tags`, {
            params: { id: 2, sourceType: 'album' },
        })
        return response
    } catch (error) {
        console.log('error', error)
        return false
    }
}

export const getAlbums = async ({ search, tags }) => {
    try {
        const response = await api.get(`/albums/2`, {
            params: { search, tags },
        })
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
        const response = await api.get(`/blog?blogId=${id}`)
        return response
    } catch (error) {
        console.log('error', error)
        return false
    }
}
