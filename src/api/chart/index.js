import api from '../util'

export const getAreaCount = async () => {
    try {
        const response = await api.get(`/chart/area/count`)
        return response
    } catch (error) {
        console.log('error', error)
        return false
    }
}

export const getViewsByDate = async () => {
    try {
        const response = await api.get(`/chart/views`)
        return response
    } catch (error) {
        console.log('error', error)
        return false
    }
}

export const getViewsBlog = async () => {
    try {
        const response = await api.get(`/chart/view/blog`)
        return response
    } catch (error) {
        console.log('error', error)
        return false
    }
}
