import api from '../util'

export const getViewsByDate = async () => {
    try {
        const response = await api.get(`/chart/views`)
        return response
    } catch (error) {
        console.log('error', error)
        return false
    }
}
