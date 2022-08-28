import Axios from 'axios'

const baseUrl = 'https://proto.huashengdong.com/api/open'

const axios = Axios.create({
    baseURL: baseUrl,
})

export default axios
