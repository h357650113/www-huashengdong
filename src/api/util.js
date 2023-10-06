import Axios from 'axios'

const baseUrl = 'https://portal.huashengdong.com/hbc/api/open'

const axios = Axios.create({
    baseURL: baseUrl,
})

export default axios
